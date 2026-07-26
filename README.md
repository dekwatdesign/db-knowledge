# MySQL → LLM Markdown Context

This generator reads a MySQL schema and creates LLM/agent-ready Markdown files. It never changes database data or schema.

## Setup

```powershell
cd C:\Users\User\Documents\Codex\2026-07-26\local-model-ollama-markdown-database-structure\outputs\mysql_markdown_context
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
```

Edit `.env`, especially `DB_PASSWORD`. Use a read-only MySQL account. The default model is the local `qwen2.5-coder:7b`.

## Generate

```powershell
ollama serve
python generate_context.py
```

Generated files appear in `generated/`:

- `README.md`: table directory
- `AI_CONTEXT.md`: Ollama-generated agent overview
- `relationships.md`: declared foreign keys
- `tables/<table>.md`: columns, indexes, foreign keys, and 5–10 real sample rows

## Safety

- The program issues only `SELECT` statements.
- Sample rows can contain sensitive health information. Keep `generated/` access-controlled and do not send it to external services without approval.
- If you need to remove generated output, delete only `generated/`; the source database is unaffected.
