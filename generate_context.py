#!/usr/bin/env python3
"""Create LLM-friendly Markdown documentation from a MySQL schema.

The program only runs SELECT queries against information_schema and the selected
database. It never runs INSERT, UPDATE, DELETE, ALTER, DROP, CREATE, or GRANT.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import urllib.error
import urllib.request
from collections import defaultdict
from datetime import date, datetime, time
from decimal import Decimal
from pathlib import Path
from typing import Any

import mysql.connector
from dotenv import load_dotenv


ROOT = Path(__file__).resolve().parent
IDENTIFIER = re.compile(r"^[A-Za-z0-9_$]+$")


def env(name: str, default: str | None = None) -> str:
    value = os.getenv(name, default)
    if value is None or value == "":
        raise ValueError(f"Missing required environment variable: {name}")
    return value


def quote_identifier(value: str) -> str:
    if not IDENTIFIER.fullmatch(value):
        raise ValueError(f"Unsafe MySQL identifier: {value!r}")
    return f"`{value}`"


def md(value: Any) -> str:
    if value is None:
        return "NULL"
    if isinstance(value, (datetime, date, time)):
        return value.isoformat(sep=" ") if isinstance(value, datetime) else value.isoformat()
    if isinstance(value, Decimal):
        return str(value)
    if isinstance(value, bytes):
        return f"<binary {len(value)} bytes>"
    return str(value).replace("|", r"\|").replace("\n", " ").replace("\r", " ")


def query(cursor: Any, sql: str, params: tuple[Any, ...] = ()) -> list[dict[str, Any]]:
    cursor.execute(sql, params)
    return list(cursor.fetchall())


def dump_json(value: Any) -> str:
    return json.dumps(value, default=str, ensure_ascii=False, indent=2)


def call_ollama(summary: dict[str, Any], host: str, model: str, timeout: int) -> str:
    prompt = """You are documenting a MySQL database for downstream LLM agents.\nWrite concise Markdown (English) with these headings exactly:\n## Database purpose\n## Key entities\n## Important relationships\n## Safe querying guidance\n## Agent notes\nUse only the supplied metadata. Do not invent business facts or field meanings. Mention table and column names exactly where useful.\n\nMETADATA:\n""" + dump_json(summary)
    request = urllib.request.Request(
        host.rstrip("/") + "/api/generate",
        data=json.dumps({"model": model, "prompt": prompt, "stream": False, "options": {"temperature": 0}}).encode(),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            payload = json.loads(response.read().decode())
        text = payload.get("response", "").strip()
        if not text:
            raise RuntimeError("Ollama returned an empty response")
        return text
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError, RuntimeError) as error:
        return "## Database purpose\n\nGenerated from MySQL metadata; semantic intent requires review.\n\n## Key entities\n\n" + ", ".join(f"`{name}`" for name in summary["tables"]) + f"\n\n## Important relationships\n\nSee `relationships.md`.\n\n## Safe querying guidance\n\nUse `SELECT`, explicit columns, and `LIMIT`; treat samples as potentially sensitive.\n\n## Agent notes\n\nOllama summary unavailable: `{error}`."


def write_table(path: Path, table: str, columns: list[dict[str, Any]], indexes: list[dict[str, Any]], foreign_keys: list[dict[str, Any]], samples: list[dict[str, Any]]) -> None:
    lines = [f"# `{table}`", "", "## Columns", "", "| Column | Type | Null | Key | Default | Extra | Comment |", "|---|---|---|---|---|---|---|"]
    for c in columns:
        lines.append("| " + " | ".join(md(c.get(k)) for k in ("COLUMN_NAME", "COLUMN_TYPE", "IS_NULLABLE", "COLUMN_KEY", "COLUMN_DEFAULT", "EXTRA", "COLUMN_COMMENT")) + " |")
    lines += ["", "## Indexes", "", "| Index | Column | Unique | Sequence |", "|---|---|---|---|"]
    for i in indexes:
        lines.append(f"| {md(i['INDEX_NAME'])} | {md(i['COLUMN_NAME'])} | {'yes' if i['NON_UNIQUE'] == 0 else 'no'} | {md(i['SEQ_IN_INDEX'])} |")
    lines += ["", "## Foreign keys", ""]
    if foreign_keys:
        lines += ["| Column | References | Constraint |", "|---|---|---|"]
        lines += [f"| {md(f['COLUMN_NAME'])} | `{md(f['REFERENCED_TABLE_NAME'])}.{md(f['REFERENCED_COLUMN_NAME'])}` | {md(f['CONSTRAINT_NAME'])} |" for f in foreign_keys]
    else:
        lines.append("No declared foreign keys.")
    lines += ["", f"## Sample rows ({len(samples)})", "", "```json", dump_json(samples), "```", ""]
    path.write_text("\n".join(lines), encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate LLM-ready Markdown context from MySQL.")
    parser.add_argument("--env-file", default=".env", help="Path to configuration file (default: .env)")
    args = parser.parse_args()
    load_dotenv(ROOT / args.env_file)
    sample_rows = min(max(int(os.getenv("SAMPLE_ROWS", "8")), 5), 10)
    output_dir = ROOT / os.getenv("OUTPUT_DIR", "generated")
    tables_dir = output_dir / "tables"
    tables_dir.mkdir(parents=True, exist_ok=True)

    config = {"host": env("DB_HOST"), "port": int(os.getenv("DB_PORT", "3306")), "database": env("DB_NAME"), "user": env("DB_USER"), "password": os.getenv("DB_PASSWORD", ""), "connection_timeout": 15, "use_pure": True}
    db = mysql.connector.connect(**config)
    cursor = db.cursor(dictionary=True)
    schema = config["database"]
    tables = query(cursor, "SELECT TABLE_NAME, TABLE_COMMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA=%s AND TABLE_TYPE='BASE TABLE' ORDER BY TABLE_NAME", (schema,))
    all_fks = query(cursor, "SELECT TABLE_NAME, COLUMN_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME, CONSTRAINT_NAME FROM information_schema.KEY_COLUMN_USAGE WHERE TABLE_SCHEMA=%s AND REFERENCED_TABLE_NAME IS NOT NULL ORDER BY TABLE_NAME, CONSTRAINT_NAME, ORDINAL_POSITION", (schema,))
    fk_by_table: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for fk in all_fks:
        fk_by_table[fk["TABLE_NAME"]].append(fk)
    overview: list[dict[str, Any]] = []
    for table_meta in tables:
        table = table_meta["TABLE_NAME"]
        columns = query(cursor, "SELECT COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_KEY, COLUMN_DEFAULT, EXTRA, COLUMN_COMMENT, ORDINAL_POSITION FROM information_schema.COLUMNS WHERE TABLE_SCHEMA=%s AND TABLE_NAME=%s ORDER BY ORDINAL_POSITION", (schema, table))
        indexes = query(cursor, "SELECT INDEX_NAME, COLUMN_NAME, NON_UNIQUE, SEQ_IN_INDEX FROM information_schema.STATISTICS WHERE TABLE_SCHEMA=%s AND TABLE_NAME=%s ORDER BY INDEX_NAME, SEQ_IN_INDEX", (schema, table))
        rows = query(cursor, f"SELECT * FROM {quote_identifier(table)} LIMIT {sample_rows}")
        write_table(tables_dir / f"{table}.md", table, columns, indexes, fk_by_table[table], rows)
        overview.append({"name": table, "comment": table_meta["TABLE_COMMENT"], "columns": [c["COLUMN_NAME"] for c in columns], "foreign_keys": [{"column": f["COLUMN_NAME"], "references": f"{f['REFERENCED_TABLE_NAME']}.{f['REFERENCED_COLUMN_NAME']}"} for f in fk_by_table[table]]})
    summary = {"database": schema, "tables": [t["TABLE_NAME"] for t in tables], "table_metadata": overview}
    (output_dir / "AI_CONTEXT.md").write_text("# AI context: `" + schema + "`\n\n" + call_ollama(summary, os.getenv("OLLAMA_HOST", "http://127.0.0.1:11434"), os.getenv("OLLAMA_MODEL", "qwen2.5-coder:7b"), int(os.getenv("OLLAMA_TIMEOUT_SECONDS", "180"))) + "\n", encoding="utf-8")
    relation_lines = [f"# Relationships: `{schema}`", "", "| Source | Target | Constraint |", "|---|---|---|"]
    relation_lines += [f"| `{f['TABLE_NAME']}.{f['COLUMN_NAME']}` | `{f['REFERENCED_TABLE_NAME']}.{f['REFERENCED_COLUMN_NAME']}` | `{f['CONSTRAINT_NAME']}` |" for f in all_fks] or ["| No declared foreign keys | - | - |"]
    (output_dir / "relationships.md").write_text("\n".join(relation_lines) + "\n", encoding="utf-8")
    index_lines = [f"# `{schema}` — LLM database context", "", "- Generated from read-only MySQL metadata and up to " + str(sample_rows) + " sample rows per table.", "- Samples may contain sensitive data; restrict access before sharing with an external model.", "", "## Files", "", "- [AI context](AI_CONTEXT.md)", "- [Relationships](relationships.md)", ""]
    index_lines += [f"- [`{t['TABLE_NAME']}`](tables/{t['TABLE_NAME']}.md) — {md(t['TABLE_COMMENT']) or 'No comment'}" for t in tables]
    (output_dir / "README.md").write_text("\n".join(index_lines) + "\n", encoding="utf-8")
    cursor.close(); db.close()
    print(f"Created {len(tables)} table documents in {output_dir}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as error:
        print(f"Generation failed: {error}", file=sys.stderr)
        raise SystemExit(1)
