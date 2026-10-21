use crate::ai::{self, generate_ai_context};
use crate::db::{create_opts, get_all_foreign_keys, get_columns, get_indexes, get_sample_rows, get_tables};
use crate::mask::MaskEngine;
use crate::models::{AiConfig, DbConnectionConfig, GenerationSummary, ProgressPayload};
use mysql::Conn;
use std::collections::HashMap;
use std::fs::{self, File};
use std::io::Write;
use std::path::{Path, PathBuf};
use std::time::Instant;
use tauri::{AppHandle, Emitter};

pub fn sanitize_filename(name: &str) -> String {
    let sanitized: String = name
        .chars()
        .map(|c| match c {
            '<' | '>' | ':' | '"' | '/' | '\\' | '|' | '?' | '*' | '\0' => '_',
            other => other,
        })
        .collect();
    if sanitized.trim().is_empty() {
        "unnamed_table".to_string()
    } else {
        sanitized
    }
}

pub fn sanitize_folder_name(name: &str) -> String {
    let sanitized: String = name
        .chars()
        .map(|c| {
            if c.is_alphanumeric() || c == '-' || c == '_' {
                c
            } else {
                '_'
            }
        })
        .collect();
    if sanitized.trim().is_empty() {
        "db_output".to_string()
    } else {
        sanitized
    }
}

pub fn md_escape(val: &str) -> String {
    val.replace('|', "\\|").replace('\n', " ").replace('\r', " ")
}

pub fn run_generation_task(
    app: AppHandle,
    connections: Vec<DbConnectionConfig>,
    base_output_dir: String,
    default_ai: AiConfig,
    global_mask_pii: bool,
) -> Vec<GenerationSummary> {
    let mask_engine = MaskEngine::default();
    let total_conns = connections.len();
    let mut summaries = Vec::new();

    let base_path = PathBuf::from(&base_output_dir);
    if let Err(e) = fs::create_dir_all(&base_path) {
        log::error!("Failed to create base output directory {}: {}", base_output_dir, e);
    }

    for (conn_idx, conn_cfg) in connections.into_iter().enumerate() {
        let conn_start = Instant::now();
        let trimmed_output = conn_cfg.output_folder.trim();
        let conn_out_dir = if trimmed_output.is_empty() {
            let subfolder = sanitize_folder_name(&conn_cfg.name);
            base_path.join(subfolder)
        } else {
            let p = PathBuf::from(trimmed_output);
            if p.is_absolute() {
                p
            } else {
                base_path.join(trimmed_output)
            }
        };

        if let Err(e) = fs::create_dir_all(&conn_out_dir) {
            log::error!("Failed to create connection directory {:?}: {}", conn_out_dir, e);
        }

        let tables_out_dir = conn_out_dir.join("tables");
        if let Err(e) = fs::create_dir_all(&tables_out_dir) {
            log::error!("Failed to create tables directory {:?}: {}", tables_out_dir, e);
        }

        let ai_config = conn_cfg.ai_override.clone().unwrap_or_else(|| default_ai.clone());
        let mask_pii = conn_cfg.mask_pii || global_mask_pii;

        // Stage 1: Connecting
        let _ = app.emit(
            "generate_progress",
            ProgressPayload {
                connection_id: conn_cfg.id.clone(),
                connection_name: conn_cfg.name.clone(),
                stage: "connecting".to_string(),
                current_table: None,
                table_index: 0,
                total_tables: 0,
                percent: (conn_idx as f32 / total_conns as f32) * 100.0,
                message: format!(
                    "Connecting to MySQL ({}:{}/{})...",
                    conn_cfg.host, conn_cfg.port, conn_cfg.database
                ),
                is_done: false,
                has_error: false,
            },
        );

        let opts = create_opts(&conn_cfg);
        let mut db_conn = match Conn::new(opts) {
            Ok(c) => c,
            Err(e) => {
                let err_msg = format!("Failed to connect to database: {}", e);
                let _ = app.emit(
                    "generate_progress",
                    ProgressPayload {
                        connection_id: conn_cfg.id.clone(),
                        connection_name: conn_cfg.name.clone(),
                        stage: "error".to_string(),
                        current_table: None,
                        table_index: 0,
                        total_tables: 0,
                        percent: ((conn_idx + 1) as f32 / total_conns as f32) * 100.0,
                        message: err_msg.clone(),
                        is_done: true,
                        has_error: true,
                    },
                );

                summaries.push(GenerationSummary {
                    connection_id: conn_cfg.id,
                    connection_name: conn_cfg.name,
                    database: conn_cfg.database,
                    output_path: conn_out_dir.to_string_lossy().to_string(),
                    tables_count: 0,
                    ai_used: false,
                    time_taken_seconds: conn_start.elapsed().as_secs_f64(),
                    success: false,
                    error: Some(err_msg),
                });
                continue;
            }
        };

        // Create directories
        if let Err(e) = fs::create_dir_all(&tables_out_dir) {
            let err_msg = format!("Failed to create directory {}: {}", tables_out_dir.display(), e);
            let _ = app.emit(
                "generate_progress",
                ProgressPayload {
                    connection_id: conn_cfg.id.clone(),
                    connection_name: conn_cfg.name.clone(),
                    stage: "error".to_string(),
                    current_table: None,
                    table_index: 0,
                    total_tables: 0,
                    percent: ((conn_idx + 1) as f32 / total_conns as f32) * 100.0,
                    message: err_msg.clone(),
                    is_done: true,
                    has_error: true,
                },
            );
            continue;
        }

        // Stage 2: Reading schema metadata
        let _ = app.emit(
            "generate_progress",
            ProgressPayload {
                connection_id: conn_cfg.id.clone(),
                connection_name: conn_cfg.name.clone(),
                stage: "reading_schema".to_string(),
                current_table: None,
                table_index: 0,
                total_tables: 0,
                percent: (conn_idx as f32 / total_conns as f32) * 100.0 + 2.0,
                message: "Reading table definitions and foreign keys...".to_string(),
                is_done: false,
                has_error: false,
            },
        );

        let all_tables = match get_tables(&mut db_conn, &conn_cfg.database) {
            Ok(t) => t,
            Err(e) => {
                let err_msg = format!("Failed to fetch tables: {}", e);
                summaries.push(GenerationSummary {
                    connection_id: conn_cfg.id,
                    connection_name: conn_cfg.name,
                    database: conn_cfg.database,
                    output_path: conn_out_dir.to_string_lossy().to_string(),
                    tables_count: 0,
                    ai_used: false,
                    time_taken_seconds: conn_start.elapsed().as_secs_f64(),
                    success: false,
                    error: Some(err_msg),
                });
                continue;
            }
        };

        // Filter tables if specified
        let tables: Vec<_> = if let Some(ref sel) = conn_cfg.selected_tables {
            if !sel.is_empty() {
                all_tables.into_iter().filter(|t| sel.contains(&t.name)).collect()
            } else {
                all_tables
            }
        } else {
            all_tables
        };

        let total_tables = tables.len();

        let all_fks = get_all_foreign_keys(&mut db_conn, &conn_cfg.database).unwrap_or_default();
        let mut fks_by_table: HashMap<String, Vec<crate::models::ForeignKeyMeta>> = HashMap::new();
        for fk in all_fks.iter() {
            fks_by_table.entry(fk.table_name.clone()).or_default().push(fk.clone());
        }

        let mut overview_metadata = Vec::new();

        // Stage 3: Extracting each table
        for (tbl_idx, tbl) in tables.iter().enumerate() {
            let table_progress = ((tbl_idx + 1) as f32 / (total_tables.max(1)) as f32) * 80.0;
            let current_percent = (conn_idx as f32 / total_conns as f32) * 100.0
                + (table_progress / total_conns as f32);

            let _ = app.emit(
                "generate_progress",
                ProgressPayload {
                    connection_id: conn_cfg.id.clone(),
                    connection_name: conn_cfg.name.clone(),
                    stage: "tables".to_string(),
                    current_table: Some(tbl.name.clone()),
                    table_index: tbl_idx + 1,
                    total_tables,
                    percent: current_percent,
                    message: format!(
                        "Generating table {}/{} (`{}`)...",
                        tbl_idx + 1, total_tables, tbl.name
                    ),
                    is_done: false,
                    has_error: false,
                },
            );

            let columns = get_columns(&mut db_conn, &conn_cfg.database, &tbl.name).unwrap_or_default();
            let indexes = get_indexes(&mut db_conn, &conn_cfg.database, &tbl.name).unwrap_or_default();
            let mut sample_rows = get_sample_rows(
                &mut db_conn,
                &tbl.name,
                &columns,
                conn_cfg.sample_rows.clamp(1, 20),
                conn_cfg.sample_max_chars.clamp(50, 10000),
            )
            .unwrap_or_default();

            if mask_pii {
                for row in sample_rows.iter_mut() {
                    mask_engine.mask_row(row);
                }
            }

            // Write table markdown file
            let safe_tbl_name = sanitize_filename(&tbl.name);
            let table_file_path = tables_out_dir.join(format!("{}.md", safe_tbl_name));
            if let Ok(mut f) = File::create(&table_file_path) {
                let _ = writeln!(f, "# `{}`\n", tbl.name);
                if !tbl.comment.is_empty() {
                    let _ = writeln!(f, "> {}\n", tbl.comment);
                }

                let _ = writeln!(f, "## Columns\n");
                let _ = writeln!(f, "| Column | Type | Null | Key | Default | Extra | Comment |");
                let _ = writeln!(f, "|---|---|---|---|---|---|---|");
                for col in &columns {
                    let default_str = col.default.as_deref().unwrap_or("NULL");
                    let _ = writeln!(
                        f,
                        "| {} | {} | {} | {} | {} | {} | {} |",
                        md_escape(&col.name),
                        md_escape(&col.data_type),
                        md_escape(&col.is_nullable),
                        md_escape(&col.key),
                        md_escape(default_str),
                        md_escape(&col.extra),
                        md_escape(&col.comment)
                    );
                }

                let _ = writeln!(f, "\n## Indexes\n");
                if indexes.is_empty() {
                    let _ = writeln!(f, "No indexes declared.");
                } else {
                    let _ = writeln!(f, "| Index | Column | Unique | Sequence |");
                    let _ = writeln!(f, "|---|---|---|---|");
                    for idx in &indexes {
                        let _ = writeln!(
                            f,
                            "| {} | {} | {} | {} |",
                            md_escape(&idx.name),
                            md_escape(&idx.column_name),
                            if idx.is_unique { "yes" } else { "no" },
                            idx.seq_in_index
                        );
                    }
                }

                let _ = writeln!(f, "\n## Foreign keys\n");
                let table_fks = fks_by_table.get(&tbl.name);
                if let Some(fks) = table_fks {
                    let _ = writeln!(f, "| Column | References | Constraint |");
                    let _ = writeln!(f, "|---|---|---|");
                    for fk in fks {
                        let _ = writeln!(
                            f,
                            "| {} | `{}.{}` | {} |",
                            md_escape(&fk.column_name),
                            md_escape(&fk.referenced_table_name),
                            md_escape(&fk.referenced_column_name),
                            md_escape(&fk.constraint_name)
                        );
                    }
                } else {
                    let _ = writeln!(f, "No declared foreign keys.");
                }

                let _ = writeln!(f, "\n## Sample rows ({})\n", sample_rows.len());
                let _ = writeln!(f, "```json\n{}\n```\n", serde_json::to_string_pretty(&sample_rows).unwrap_or_default());
            }

            overview_metadata.push(serde_json::json!({
                "name": tbl.name,
                "comment": tbl.comment,
                "columns": columns.iter().map(|c| &c.name).collect::<Vec<_>>(),
                "foreign_keys": fks_by_table.get(&tbl.name).map(|fks| {
                    fks.iter().map(|f| serde_json::json!({
                        "column": f.column_name,
                        "references": format!("{}.{}", f.referenced_table_name, f.referenced_column_name)
                    })).collect::<Vec<_>>()
                }).unwrap_or_default()
            }));
        }

        // Stage 4: AI Context Analysis
        let _ = app.emit(
            "generate_progress",
            ProgressPayload {
                connection_id: conn_cfg.id.clone(),
                connection_name: conn_cfg.name.clone(),
                stage: "ai_context".to_string(),
                current_table: None,
                table_index: total_tables,
                total_tables,
                percent: (conn_idx as f32 / total_conns as f32) * 100.0 + 85.0,
                message: format!("Analyzing schema with AI service ({}/{})...", ai_config.api_type, ai_config.model),
                is_done: false,
                has_error: false,
            },
        );

        let summary_payload = serde_json::json!({
            "database": conn_cfg.database,
            "tables": tables.iter().map(|t| &t.name).collect::<Vec<_>>(),
            "table_metadata": overview_metadata
        });

        let ai_summary = generate_ai_context(&ai_config, &summary_payload).unwrap_or_else(|e| {
            ai::generate_fallback_summary(&summary_payload, &format!("AI error: {}", e))
        });

        let _ = fs::write(
            conn_out_dir.join("AI_CONTEXT.md"),
            format!("# AI context: `{}`\n\n{}\n", conn_cfg.database, ai_summary),
        );

        // Stage 5: Relationships & README
        let mut rel_content = format!("# Relationships: `{}`\n\n", conn_cfg.database);
        if all_fks.is_empty() {
            rel_content.push_str("No declared foreign keys found in database.\n");
        } else {
            rel_content.push_str("| Source | Target | Constraint |\n|---|---|---|\n");
            for fk in &all_fks {
                rel_content.push_str(&format!(
                    "| `{}.{}` | `{}.{}` | `{}` |\n",
                    md_escape(&fk.table_name),
                    md_escape(&fk.column_name),
                    md_escape(&fk.referenced_table_name),
                    md_escape(&fk.referenced_column_name),
                    md_escape(&fk.constraint_name)
                ));
            }
        }
        let _ = fs::write(conn_out_dir.join("relationships.md"), rel_content);

        // Stage 6: README.md
        let mut readme_content = format!(
            "# `{}` — LLM Database Knowledge\n\n\
             - Generated from read-only MySQL metadata.\n\
             - Contains documentation for **{}** tables.\n\
             - Masked sensitive data: **{}**\n\n\
             ## Core Documents\n\n\
             - 🧠 [AI Context Overview](AI_CONTEXT.md)\n\
             - 🔗 [Relationships Graph & Foreign Keys](relationships.md)\n\n\
             ## Tables\n\n",
            conn_cfg.database,
            total_tables,
            if mask_pii { "Yes (Thai PII masked)" } else { "No (Raw sample projection)" }
        );

        for tbl in &tables {
            let comment_text = if tbl.comment.is_empty() {
                "No comment"
            } else {
                tbl.comment.as_str()
            };
            let safe_tbl_name = sanitize_filename(&tbl.name);
            readme_content.push_str(&format!(
                "- [`{}`](tables/{}.md) — {}\n",
                tbl.name, safe_tbl_name, md_escape(comment_text)
            ));
        }
        let _ = fs::write(conn_out_dir.join("README.md"), readme_content);

        let elapsed = conn_start.elapsed().as_secs_f64();

        // Emit done for this connection
        let _ = app.emit(
            "generate_progress",
            ProgressPayload {
                connection_id: conn_cfg.id.clone(),
                connection_name: conn_cfg.name.clone(),
                stage: "done".to_string(),
                current_table: None,
                table_index: total_tables,
                total_tables,
                percent: ((conn_idx + 1) as f32 / total_conns as f32) * 100.0,
                message: format!(
                    "Completed `{}`: {} tables generated in {:.1}s",
                    conn_cfg.name, total_tables, elapsed
                ),
                is_done: true,
                has_error: false,
            },
        );

        summaries.push(GenerationSummary {
            connection_id: conn_cfg.id,
            connection_name: conn_cfg.name,
            database: conn_cfg.database,
            output_path: conn_out_dir.to_string_lossy().to_string(),
            tables_count: total_tables,
            ai_used: ai_config.api_type != "disabled",
            time_taken_seconds: elapsed,
            success: true,
            error: None,
        });
    }

    // If multiple databases generated, create an aggregated SUMMARY.md
    if summaries.len() > 1 {
        let mut master_summary = "# Databases Knowledge Summary\n\n".to_string();
        master_summary.push_str("| Connection | Database | Tables | Status | Folder |\n");
        master_summary.push_str("|---|---|---|---|---|\n");
        for s in &summaries {
            let status_badge = if s.success { "✅ Success" } else { "❌ Failed" };
            master_summary.push_str(&format!(
                "| **{}** | `{}` | {} | {} | [{}]({}) |\n",
                md_escape(&s.connection_name),
                md_escape(&s.database),
                s.tables_count,
                status_badge,
                md_escape(&Path::new(&s.output_path).file_name().unwrap_or_default().to_string_lossy()),
                md_escape(&Path::new(&s.output_path).file_name().unwrap_or_default().to_string_lossy())
            ));
        }
        let _ = fs::write(base_path.join("SUMMARY.md"), master_summary);
    }

    summaries
}
