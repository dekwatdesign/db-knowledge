pub mod ai;
pub mod db;
pub mod generator;
pub mod mask;
pub mod models;
pub mod storage;

use models::{AiConfig, AppSettings, DbConnectionConfig, DbTestResult, GenerationSummary, TableMeta};
use std::fs;
use std::path::Path;
use tauri::AppHandle;

#[tauri::command]
fn get_saved_connections() -> Vec<DbConnectionConfig> {
    storage::load_connections()
}

#[tauri::command]
fn save_connections_list(conns: Vec<DbConnectionConfig>) -> Result<(), String> {
    storage::save_connections(&conns)
}

#[tauri::command]
fn get_app_settings() -> AppSettings {
    storage::load_settings()
}

#[tauri::command]
fn save_app_settings(settings: AppSettings) -> Result<(), String> {
    storage::save_settings(&settings)
}

#[tauri::command]
fn test_db(config: DbConnectionConfig) -> DbTestResult {
    db::test_connection(&config)
}

#[tauri::command]
fn fetch_tables(config: DbConnectionConfig) -> Result<Vec<TableMeta>, String> {
    let opts = db::create_opts(&config);
    let mut conn = mysql::Conn::new(opts).map_err(|e| format!("Connection error: {}", e))?;
    db::get_tables(&mut conn, &config.database)
}

#[tauri::command]
fn test_ai(config: AiConfig) -> Result<String, String> {
    ai::test_ai_connection(&config)
}

#[tauri::command]
fn pick_destination_folder() -> Option<String> {
    let dialog = rfd::FileDialog::new();
    let folder = dialog.pick_folder()?;
    Some(folder.to_string_lossy().to_string())
}

#[tauri::command]
fn open_in_explorer(path: String) -> Result<(), String> {
    let p = Path::new(&path);
    if !p.exists() {
        return Err(format!("Path does not exist: {}", path));
    }

    #[cfg(target_os = "windows")]
    {
        std::process::Command::new("explorer")
            .arg(&path)
            .spawn()
            .map_err(|e| format!("Failed to open Windows Explorer: {}", e))?;
    }

    #[cfg(not(target_os = "windows"))]
    {
        std::process::Command::new("open")
            .arg(&path)
            .spawn()
            .map_err(|e| format!("Failed to open path: {}", e))?;
    }

    Ok(())
}

#[tauri::command]
fn read_doc_file(file_path: String) -> Result<String, String> {
    fs::read_to_string(&file_path).map_err(|e| format!("Failed to read file: {}", e))
}

#[tauri::command]
fn list_output_files(folder_path: String) -> Result<Vec<String>, String> {
    let base = Path::new(&folder_path);
    if !base.exists() {
        return Ok(Vec::new());
    }

    let mut result = Vec::new();
    let mut stack = vec![base.to_path_buf()];

    while let Some(current) = stack.pop() {
        if let Ok(entries) = fs::read_dir(&current) {
            for entry in entries.flatten() {
                let path = entry.path();
                if path.is_dir() {
                    stack.push(path);
                } else if path.extension().and_then(|s| s.to_str()) == Some("md") {
                    result.push(path.to_string_lossy().to_string());
                }
            }
        }
    }

    result.sort();
    Ok(result)
}

#[tauri::command]
async fn generate_knowledge(
    app: AppHandle,
    connection_ids: Vec<String>,
    output_dir: String,
    mask_pii: bool,
) -> Result<Vec<GenerationSummary>, String> {
    let all_conns = storage::load_connections();
    let settings = storage::load_settings();

    let selected_conns: Vec<DbConnectionConfig> = all_conns
        .into_iter()
        .filter(|c| connection_ids.contains(&c.id))
        .collect();

    if selected_conns.is_empty() {
        return Err("No matching connections selected for generation".to_string());
    }

    let summaries = tokio::task::spawn_blocking(move || {
        generator::run_generation_task(
            app,
            selected_conns,
            output_dir,
            settings.default_ai,
            mask_pii,
        )
    })
    .await
    .map_err(|e| format!("Task execution error: {}", e))?;

    Ok(summaries)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_log::Builder::default().build())
        .invoke_handler(tauri::generate_handler![
            get_saved_connections,
            save_connections_list,
            get_app_settings,
            save_app_settings,
            test_db,
            fetch_tables,
            test_ai,
            pick_destination_folder,
            open_in_explorer,
            read_doc_file,
            list_output_files,
            generate_knowledge,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
