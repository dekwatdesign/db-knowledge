use crate::models::{AiConfig, AppSettings, DbConnectionConfig};
use std::fs;
use std::path::PathBuf;

pub fn get_config_dir() -> PathBuf {
    if let Some(mut dir) = dirs::config_dir() {
        dir.push("db-knowledge-app");
        let _ = fs::create_dir_all(&dir);
        dir
    } else {
        PathBuf::from(".")
    }
}

pub fn get_connections_file() -> PathBuf {
    get_config_dir().join("connections.json")
}

pub fn get_settings_file() -> PathBuf {
    get_config_dir().join("settings.json")
}

pub fn load_connections() -> Vec<DbConnectionConfig> {
    let file = get_connections_file();
    if file.exists() {
        if let Ok(data) = fs::read_to_string(&file) {
            if let Ok(conns) = serde_json::from_str::<Vec<DbConnectionConfig>>(&data) {
                if !conns.is_empty() {
                    return conns;
                }
            }
        }
    }

    // Attempt to seed from local .env or .env.example
    let mut initial = Vec::new();
    if let Some(seeded) = seed_from_env_file(".env") {
        initial.push(seeded);
    } else if let Some(seeded) = seed_from_env_file(".env.example") {
        initial.push(seeded);
    }

    if initial.is_empty() {
        // Fallback default sample connection
        initial.push(DbConnectionConfig {
            id: "conn-default".to_string(),
            name: "HOSxP Database".to_string(),
            host: "127.0.0.1".to_string(),
            port: 3306,
            database: "hos".to_string(),
            user: "root".to_string(),
            password: "".to_string(),
            sample_rows: 8,
            sample_max_chars: 1000,
            output_folder: "hosxp".to_string(),
            ai_override: None,
            mask_pii: false,
            selected_tables: None,
        });
    }

    let _ = save_connections(&initial);
    initial
}

pub fn save_connections(conns: &[DbConnectionConfig]) -> Result<(), String> {
    let file = get_connections_file();
    let json_str = serde_json::to_string_pretty(conns).map_err(|e| e.to_string())?;
    fs::write(&file, json_str).map_err(|e| format!("Failed to save connections: {}", e))?;
    Ok(())
}

pub fn load_settings() -> AppSettings {
    let file = get_settings_file();
    if file.exists() {
        if let Ok(data) = fs::read_to_string(&file) {
            if let Ok(settings) = serde_json::from_str::<AppSettings>(&data) {
                return settings;
            }
        }
    }

    // Default settings with current working directory / generated
    let cwd = std::env::current_dir()
        .map(|p| p.join("generated").to_string_lossy().to_string())
        .unwrap_or_else(|_| "./generated".to_string());

    let settings = AppSettings {
        output_dir: cwd,
        default_ai: AiConfig {
            api_type: "openai".to_string(),
            base_url: "http://localhost:27657/v1".to_string(),
            model: "gpt-5.6-luna".to_string(),
            api_key: String::new(),
            timeout_seconds: 180,
            max_output_tokens: 4096,
            allow_remote: false,
        },
        mask_pii_default: false,
        theme: "dark".to_string(),
    };

    let _ = save_settings(&settings);
    settings
}

pub fn save_settings(settings: &AppSettings) -> Result<(), String> {
    let file = get_settings_file();
    let json_str = serde_json::to_string_pretty(settings).map_err(|e| e.to_string())?;
    fs::write(&file, json_str).map_err(|e| format!("Failed to save settings: {}", e))?;
    Ok(())
}

fn seed_from_env_file(env_name: &str) -> Option<DbConnectionConfig> {
    let path = std::path::Path::new(env_name);
    if !path.exists() {
        return None;
    }

    let content = fs::read_to_string(path).ok()?;
    let mut map = std::collections::HashMap::new();

    for line in content.lines() {
        let trimmed = line.trim();
        if trimmed.is_empty() || trimmed.starts_with('#') {
            continue;
        }
        if let Some((k, v)) = trimmed.split_once('=') {
            map.insert(k.trim().to_string(), v.trim().to_string());
        }
    }

    let host = map.get("DB_HOST").cloned().unwrap_or_default();
    let db_name = map.get("DB_NAME").cloned().unwrap_or_default();
    let user = map.get("DB_USER").cloned().unwrap_or_default();

    if host.is_empty() || db_name.is_empty() {
        return None;
    }

    let port: u16 = map.get("DB_PORT").and_then(|p| p.parse().ok()).unwrap_or(3306);
    let password = map.get("DB_PASSWORD").cloned().unwrap_or_default();
    let sample_rows: usize = map.get("SAMPLE_ROWS").and_then(|p| p.parse().ok()).unwrap_or(8);
    let sample_max_chars: usize = map.get("SAMPLE_MAX_CHARS").and_then(|p| p.parse().ok()).unwrap_or(1000);

    let ai_override = if let Some(api_type) = map.get("AI_API_TYPE") {
        Some(AiConfig {
            api_type: api_type.clone(),
            base_url: map.get("AI_BASE_URL").cloned().unwrap_or_default(),
            model: map.get("AI_MODEL").cloned().unwrap_or_default(),
            api_key: map.get("AI_API_KEY").cloned().unwrap_or_default(),
            timeout_seconds: map.get("AI_TIMEOUT_SECONDS").and_then(|p| p.parse().ok()).unwrap_or(180),
            max_output_tokens: map.get("AI_MAX_OUTPUT_TOKENS").and_then(|p| p.parse().ok()).unwrap_or(4096),
            allow_remote: map.get("AI_ALLOW_REMOTE").map(|v| v.to_lowercase() == "true").unwrap_or(false),
        })
    } else {
        None
    };

    Some(DbConnectionConfig {
        id: format!("conn-{}", sanitize_id(&db_name)),
        name: format!("{} Database", db_name),
        host,
        port,
        database: db_name.clone(),
        user,
        password,
        sample_rows,
        sample_max_chars,
        output_folder: db_name,
        ai_override,
        mask_pii: false,
        selected_tables: None,
    })
}

fn sanitize_id(val: &str) -> String {
    val.chars().filter(|c| c.is_alphanumeric() || *c == '-').collect()
}
