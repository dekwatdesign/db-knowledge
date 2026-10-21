use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AiConfig {
    pub api_type: String, // "ollama", "openai", "anthropic", "gemini", "disabled"
    pub base_url: String,
    pub model: String,
    pub api_key: String,
    pub timeout_seconds: u64,
    pub max_output_tokens: u32,
    pub allow_remote: bool,
}

impl Default for AiConfig {
    fn default() -> Self {
        Self {
            api_type: "ollama".to_string(),
            base_url: "http://127.0.0.1:11434".to_string(),
            model: "qwen2.5-coder:7b".to_string(),
            api_key: String::new(),
            timeout_seconds: 180,
            max_output_tokens: 4096,
            allow_remote: false,
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DbConnectionConfig {
    pub id: String,
    pub name: String,
    pub host: String,
    pub port: u16,
    pub database: String,
    pub user: String,
    pub password: String,
    pub sample_rows: usize,
    pub sample_max_chars: usize,
    pub output_folder: String,
    pub ai_override: Option<AiConfig>,
    pub mask_pii: bool,
    #[serde(default)]
    pub selected_tables: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AppSettings {
    pub output_dir: String,
    pub default_ai: AiConfig,
    pub mask_pii_default: bool,
    pub theme: String,
}

impl Default for AppSettings {
    fn default() -> Self {
        Self {
            output_dir: "./generated".to_string(),
            default_ai: AiConfig::default(),
            mask_pii_default: false,
            theme: "dark".to_string(),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TableMeta {
    pub name: String,
    pub comment: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ColumnMeta {
    pub name: String,
    pub data_type: String,
    pub is_nullable: String,
    pub key: String,
    pub default: Option<String>,
    pub extra: String,
    pub comment: String,
    pub ordinal_position: u32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IndexMeta {
    pub name: String,
    pub column_name: String,
    pub is_unique: bool,
    pub seq_in_index: u32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ForeignKeyMeta {
    pub table_name: String,
    pub column_name: String,
    pub referenced_table_name: String,
    pub referenced_column_name: String,
    pub constraint_name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DbTestResult {
    pub success: bool,
    pub message: String,
    pub version: Option<String>,
    pub table_count: Option<usize>,
    pub latency_ms: Option<u64>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProgressPayload {
    pub connection_id: String,
    pub connection_name: String,
    pub stage: String, // "connecting", "reading_schema", "tables", "ai_context", "relationships", "done", "error"
    pub current_table: Option<String>,
    pub table_index: usize,
    pub total_tables: usize,
    pub percent: f32,
    pub message: String,
    pub is_done: bool,
    pub has_error: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GenerationSummary {
    pub connection_id: String,
    pub connection_name: String,
    pub database: String,
    pub output_path: String,
    pub tables_count: usize,
    pub ai_used: bool,
    pub time_taken_seconds: f64,
    pub success: bool,
    pub error: Option<String>,
}
