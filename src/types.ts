export type AiApiType = 'ollama' | 'openai' | 'anthropic' | 'gemini' | 'disabled';

export interface AiConfig {
  api_type: AiApiType;
  base_url: string;
  model: string;
  api_key: string;
  timeout_seconds: number;
  max_output_tokens: number;
  allow_remote: boolean;
}

export interface DbConnectionConfig {
  id: string;
  name: string;
  host: string;
  port: number;
  database: string;
  user: string;
  password?: string;
  sample_rows: number;
  sample_max_chars: number;
  output_folder: string;
  ai_override?: AiConfig | null;
  mask_pii: boolean;
  selected_tables?: string[] | null;
}

export interface AppSettings {
  output_dir: string;
  default_ai: AiConfig;
  mask_pii_default: boolean;
  theme: 'dark' | 'light';
}

export interface TableMeta {
  name: string;
  comment: string;
}

export interface DbTestResult {
  success: boolean;
  message: string;
  version?: string | null;
  table_count?: number | null;
  latency_ms?: number | null;
}

export interface ProgressPayload {
  connection_id: string;
  connection_name: string;
  stage: 'connecting' | 'reading_schema' | 'tables' | 'ai_context' | 'relationships' | 'done' | 'error';
  current_table?: string | null;
  table_index: number;
  total_tables: number;
  percent: number;
  message: string;
  is_done: boolean;
  has_error: boolean;
}

export interface GenerationSummary {
  connection_id: string;
  connection_name: string;
  database: string;
  output_path: string;
  tables_count: number;
  ai_used: boolean;
  time_taken_seconds: number;
  success: boolean;
  error?: string | null;
}
