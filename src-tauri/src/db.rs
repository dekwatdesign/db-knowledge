use crate::models::{ColumnMeta, DbConnectionConfig, DbTestResult, ForeignKeyMeta, IndexMeta, TableMeta};
use mysql::prelude::*;
use mysql::*;
use std::collections::HashSet;
use std::time::Instant;

pub fn decode_bytes_safe(bytes: &[u8]) -> String {
    // 1. Try standard UTF-8 first
    if let Ok(s) = std::str::from_utf8(bytes) {
        return s.to_string();
    }

    // 2. Try Windows-874 / TIS-620 Thai decoding
    let mut is_thai_tis620 = false;
    for &b in bytes {
        if (0xA1..=0xFB).contains(&b) {
            is_thai_tis620 = true;
            break;
        }
    }

    if is_thai_tis620 {
        let mut s = String::with_capacity(bytes.len() * 2);
        for &b in bytes {
            if b < 0x80 {
                s.push(b as char);
            } else if (0xA1..=0xFB).contains(&b) {
                if let Some(ch) = char::from_u32(0x0E00 + (b as u32 - 0xA0)) {
                    s.push(ch);
                } else {
                    s.push('?');
                }
            } else {
                s.push('?');
            }
        }
        return s;
    }

    // 3. Fallback to lossy UTF-8
    String::from_utf8_lossy(bytes).to_string()
}

pub fn quote_identifier(value: &str) -> Result<String, String> {
    if value.contains('\0') {
        return Err("MySQL identifier cannot contain NUL byte".to_string());
    }
    // Escape backticks by doubling them (standard MySQL escaping)
    let escaped = value.replace('`', "``");
    Ok(format!("`{}`", escaped))
}

fn val_to_str(row: &Row, idx: usize) -> String {
    match row.as_ref(idx) {
        Some(Value::Bytes(b)) => decode_bytes_safe(b),
        Some(Value::Int(n)) => n.to_string(),
        Some(Value::UInt(n)) => n.to_string(),
        Some(Value::Float(f)) => f.to_string(),
        Some(Value::Double(f)) => f.to_string(),
        _ => String::new(),
    }
}

fn val_to_opt_str(row: &Row, idx: usize) -> Option<String> {
    match row.as_ref(idx) {
        Some(Value::NULL) | None => None,
        Some(Value::Bytes(b)) => Some(decode_bytes_safe(b)),
        Some(_) => {
            let s = val_to_str(row, idx);
            if s.is_empty() {
                None
            } else {
                Some(s)
            }
        }
    }
}

fn val_to_u32(row: &Row, idx: usize, default: u32) -> u32 {
    match row.as_ref(idx) {
        Some(Value::Int(n)) => (*n).max(0) as u32,
        Some(Value::UInt(n)) => *n as u32,
        Some(Value::Bytes(b)) => {
            let s = decode_bytes_safe(b);
            s.parse::<u32>().unwrap_or(default)
        }
        _ => default,
    }
}

pub fn create_opts(config: &DbConnectionConfig) -> Opts {
    OptsBuilder::new()
        .ip_or_hostname(Some(config.host.clone()))
        .tcp_port(config.port)
        .db_name(Some(config.database.clone()))
        .user(Some(config.user.clone()))
        .pass(Some(config.password.clone()))
        .into()
}

pub fn test_connection(config: &DbConnectionConfig) -> DbTestResult {
    let start = Instant::now();
    let opts = create_opts(config);

    let mut conn = match Conn::new(opts) {
        Ok(c) => c,
        Err(e) => {
            return DbTestResult {
                success: false,
                message: format!("Connection failed: {}", e),
                version: None,
                table_count: None,
                latency_ms: None,
            };
        }
    };

    let version: Option<String> = conn
        .query_first::<Row, _>("SELECT VERSION()")
        .ok()
        .flatten()
        .map(|r| val_to_str(&r, 0));

    let table_count: Option<usize> = conn
        .exec_first::<Row, _, _>(
            "SELECT COUNT(*) FROM information_schema.TABLES WHERE TABLE_SCHEMA = ? AND TABLE_TYPE = 'BASE TABLE'",
            (&config.database,),
        )
        .ok()
        .flatten()
        .map(|r| val_to_u32(&r, 0, 0) as usize);

    let latency = start.elapsed().as_millis() as u64;

    DbTestResult {
        success: true,
        message: "Successfully connected to MySQL database".to_string(),
        version,
        table_count,
        latency_ms: Some(latency),
    }
}

pub fn get_tables(conn: &mut Conn, schema: &str) -> Result<Vec<TableMeta>, String> {
    let sql = "SELECT TABLE_NAME, COALESCE(TABLE_COMMENT, '') FROM information_schema.TABLES WHERE TABLE_SCHEMA = ? AND TABLE_TYPE = 'BASE TABLE' ORDER BY TABLE_NAME";
    let rows: Vec<Row> = conn
        .exec(sql, (schema,))
        .map_err(|e| format!("Failed to fetch tables: {}", e))?;

    let mut tables = Vec::with_capacity(rows.len());
    for row in rows {
        tables.push(TableMeta {
            name: val_to_str(&row, 0),
            comment: val_to_str(&row, 1),
        });
    }

    Ok(tables)
}

pub fn get_columns(conn: &mut Conn, schema: &str, table: &str) -> Result<Vec<ColumnMeta>, String> {
    let sql = "SELECT COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_KEY, COLUMN_DEFAULT, EXTRA, COALESCE(COLUMN_COMMENT, ''), ORDINAL_POSITION FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ? ORDER BY ORDINAL_POSITION";
    let rows: Vec<Row> = conn
        .exec(sql, (schema, table))
        .map_err(|e| format!("Failed to fetch columns for {}: {}", table, e))?;

    let mut columns = Vec::with_capacity(rows.len());
    for row in rows {
        columns.push(ColumnMeta {
            name: val_to_str(&row, 0),
            data_type: val_to_str(&row, 1),
            is_nullable: val_to_str(&row, 2),
            key: val_to_str(&row, 3),
            default: val_to_opt_str(&row, 4),
            extra: val_to_str(&row, 5),
            comment: val_to_str(&row, 6),
            ordinal_position: val_to_u32(&row, 7, 0),
        });
    }

    Ok(columns)
}

pub fn get_indexes(conn: &mut Conn, schema: &str, table: &str) -> Result<Vec<IndexMeta>, String> {
    let sql = "SELECT INDEX_NAME, COLUMN_NAME, NON_UNIQUE, SEQ_IN_INDEX FROM information_schema.STATISTICS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ? ORDER BY INDEX_NAME, SEQ_IN_INDEX";
    let rows: Vec<Row> = conn
        .exec(sql, (schema, table))
        .map_err(|e| format!("Failed to fetch indexes for {}: {}", table, e))?;

    let mut indexes = Vec::with_capacity(rows.len());
    for row in rows {
        let non_unique = val_to_u32(&row, 2, 1);
        indexes.push(IndexMeta {
            name: val_to_str(&row, 0),
            column_name: val_to_str(&row, 1),
            is_unique: non_unique == 0,
            seq_in_index: val_to_u32(&row, 3, 1),
        });
    }

    Ok(indexes)
}

pub fn get_all_foreign_keys(conn: &mut Conn, schema: &str) -> Result<Vec<ForeignKeyMeta>, String> {
    let sql = "SELECT TABLE_NAME, COLUMN_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME, CONSTRAINT_NAME FROM information_schema.KEY_COLUMN_USAGE WHERE TABLE_SCHEMA = ? AND REFERENCED_TABLE_NAME IS NOT NULL ORDER BY TABLE_NAME, CONSTRAINT_NAME, ORDINAL_POSITION";
    let rows: Vec<Row> = conn
        .exec(sql, (schema,))
        .map_err(|e| format!("Failed to fetch foreign keys: {}", e))?;

    let mut fks = Vec::with_capacity(rows.len());
    for row in rows {
        fks.push(ForeignKeyMeta {
            table_name: val_to_str(&row, 0),
            column_name: val_to_str(&row, 1),
            referenced_table_name: val_to_str(&row, 2),
            referenced_column_name: val_to_str(&row, 3),
            constraint_name: val_to_str(&row, 4),
        });
    }

    Ok(fks)
}

pub fn build_sample_projection(
    columns: &[ColumnMeta],
    max_chars: usize,
) -> Result<String, String> {
    let binary_types: HashSet<&str> = [
        "binary",
        "varbinary",
        "tinyblob",
        "blob",
        "mediumblob",
        "longblob",
        "bit",
        "geometry",
        "point",
        "linestring",
        "polygon",
        "multipoint",
        "multilinestring",
        "multipolygon",
        "geometrycollection",
    ]
    .iter()
    .cloned()
    .collect();

    let text_types: HashSet<&str> = [
        "char",
        "varchar",
        "tinytext",
        "text",
        "mediumtext",
        "longtext",
        "json",
        "enum",
        "set",
    ]
    .iter()
    .cloned()
    .collect();

    let mut expressions = Vec::new();
    for col in columns {
        let quoted = quote_identifier(&col.name)?;
        let col_type_lower = col.data_type.to_lowercase();
        let base_type = col_type_lower
            .split('(')
            .next()
            .unwrap_or("")
            .trim()
            .split_whitespace()
            .next()
            .unwrap_or("");

        if binary_types.contains(base_type) {
            expressions.push(format!(
                "CASE WHEN {} IS NULL THEN NULL ELSE CONCAT('<binary ', OCTET_LENGTH({}), ' bytes>') END AS {}",
                quoted, quoted, quoted
            ));
        } else if text_types.contains(base_type) {
            expressions.push(format!(
                "CASE WHEN CHAR_LENGTH({}) > {} THEN CONCAT(LEFT({}, {}), '... [truncated]') ELSE LEFT({}, {}) END AS {}",
                quoted, max_chars, quoted, max_chars, quoted, max_chars, quoted
            ));
        } else {
            expressions.push(quoted);
        }
    }

    if expressions.is_empty() {
        Ok("*".to_string())
    } else {
        Ok(expressions.join(", "))
    }
}

pub fn get_sample_rows(
    conn: &mut Conn,
    table: &str,
    columns: &[ColumnMeta],
    limit: usize,
    max_chars: usize,
) -> Result<Vec<serde_json::Map<String, serde_json::Value>>, String> {
    let quoted_table = quote_identifier(table)?;
    let projection = build_sample_projection(columns, max_chars)?;
    let sql = format!("SELECT {} FROM {} LIMIT {}", projection, quoted_table, limit);

    let rows: Vec<Row> = conn
        .query(&sql)
        .map_err(|e| format!("Failed to query sample rows for {}: {}", table, e))?;

    let mut results = Vec::new();
    for row in rows {
        let mut map = serde_json::Map::new();
        for (i, col) in columns.iter().enumerate() {
            let val = match row.as_ref(i) {
                Some(Value::NULL) => serde_json::Value::Null,
                Some(Value::Bytes(b)) => {
                    let s = decode_bytes_safe(b);
                    serde_json::Value::String(s)
                }
                Some(Value::Int(n)) => serde_json::json!(n),
                Some(Value::UInt(n)) => serde_json::json!(n),
                Some(Value::Float(f)) => serde_json::json!(f),
                Some(Value::Double(f)) => serde_json::json!(f),
                Some(Value::Date(y, m, d, h, mi, s, micro)) => {
                    if *h == 0 && *mi == 0 && *s == 0 && *micro == 0 {
                        serde_json::Value::String(format!("{:04}-{:02}-{:02}", y, m, d))
                    } else {
                        serde_json::Value::String(format!(
                            "{:04}-{:02}-{:02} {:02}:{:02}:{:02}",
                            y, m, d, h, mi, s
                        ))
                    }
                }
                Some(Value::Time(is_neg, d, h, m, s, _)) => {
                    let sign = if *is_neg { "-" } else { "" };
                    serde_json::Value::String(format!("{}{:02}:{:02}:{:02}", sign, d * 24 + (*h as u32), m, s))
                }
                _ => serde_json::Value::Null,
            };
            map.insert(col.name.clone(), val);
        }
        results.push(map);
    }

    Ok(results)
}
