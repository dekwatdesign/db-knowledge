import { invoke } from '@tauri-apps/api/core';
import type {
  AppSettings,
  DbConnectionConfig,
  DbTestResult,
  GenerationSummary,
  AiConfig,
  TableMeta,
} from './types';

export async function getSavedConnections(): Promise<DbConnectionConfig[]> {
  try {
    return await invoke<DbConnectionConfig[]>('get_saved_connections');
  } catch (err) {
    console.warn('Fallback to local storage / mock:', err);
    return [];
  }
}

export async function saveConnectionsList(conns: DbConnectionConfig[]): Promise<void> {
  await invoke('save_connections_list', { conns });
}

export async function getAppSettings(): Promise<AppSettings> {
  return await invoke<AppSettings>('get_app_settings');
}

export async function saveAppSettings(settings: AppSettings): Promise<void> {
  await invoke('save_app_settings', { settings });
}

export async function testDb(config: DbConnectionConfig): Promise<DbTestResult> {
  return await invoke<DbTestResult>('test_db', { config });
}

export async function fetchTables(config: DbConnectionConfig): Promise<TableMeta[]> {
  return await invoke<TableMeta[]>('fetch_tables', { config });
}

export async function testAi(config: AiConfig): Promise<string> {
  return await invoke<string>('test_ai', { config });
}

export async function pickDestinationFolder(): Promise<string | null> {
  return await invoke<string | null>('pick_destination_folder');
}

export async function openInExplorer(path: string): Promise<void> {
  await invoke('open_in_explorer', { path });
}

export async function readDocFile(filePath: string): Promise<string> {
  return await invoke<string>('read_doc_file', { filePath });
}

export async function listOutputFiles(folderPath: string): Promise<string[]> {
  return await invoke<string[]>('list_output_files', { folderPath });
}

export async function generateKnowledge(
  connectionIds: string[],
  outputDir: string,
  maskPii: boolean
): Promise<GenerationSummary[]> {
  return await invoke<GenerationSummary[]>('generate_knowledge', {
    connectionIds,
    outputDir,
    maskPii,
  });
}
