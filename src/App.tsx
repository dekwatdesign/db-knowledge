import React, { useState, useEffect } from 'react';
import { listen } from '@tauri-apps/api/event';
import { Header, type TabId } from './components/Header';
import { GenerateTab } from './components/GenerateTab';
import { ConnectionsTab } from './components/ConnectionsTab';
import { AiSettingsTab } from './components/AiSettingsTab';
import { DocViewerTab } from './components/DocViewerTab';
import { SettingsTab } from './components/SettingsTab';
import { ProgressModal } from './components/ProgressModal';
import {
  getSavedConnections,
  saveConnectionsList,
  getAppSettings,
  saveAppSettings,
  pickDestinationFolder,
  openInExplorer,
  generateKnowledge,
} from './api';
import type {
  DbConnectionConfig,
  AppSettings,
  AiConfig,
  ProgressPayload,
  GenerationSummary,
} from './types';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('generate');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [connections, setConnections] = useState<DbConnectionConfig[]>([]);
  const [selectedConnIds, setSelectedConnIds] = useState<string[]>([]);
  const [settings, setSettings] = useState<AppSettings>({
    output_dir: './generated',
    default_ai: {
      api_type: 'openai',
      base_url: 'http://localhost:27657/v1',
      model: 'gpt-5.6-luna',
      api_key: '',
      timeout_seconds: 180,
      max_output_tokens: 4096,
      allow_remote: false,
    },
    mask_pii_default: false,
    theme: 'dark',
  });
  const [maskPii, setMaskPii] = useState(false);

  // Generation & Progress states
  const [isGenerating, setIsGenerating] = useState(false);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
  const [currentProgress, setCurrentProgress] = useState<ProgressPayload | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [summaries, setSummaries] = useState<GenerationSummary[]>([]);

  // Initialize data
  useEffect(() => {
    async function init() {
      try {
        const conns = await getSavedConnections();
        setConnections(conns);
        if (conns.length > 0) {
          // default select all
          setSelectedConnIds(conns.map((c) => c.id));
        }

        const appSettings = await getAppSettings();
        setSettings(appSettings);
        setMaskPii(appSettings.mask_pii_default);
        if (appSettings.theme) {
          setTheme(appSettings.theme);
        }
      } catch (err) {
        console.error('Initialization error:', err);
      }
    }
    init();
  }, []);

  // Sync theme with document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  // Listen to Tauri progress events
  useEffect(() => {
    let unlisten: (() => void) | undefined;

    async function setupListener() {
      unlisten = await listen<ProgressPayload>('generate_progress', (event) => {
        const payload = event.payload;
        setCurrentProgress(payload);
        setLogs((prev) => [...prev, `[${payload.stage.toUpperCase()}] ${payload.message}`]);
      });
    }

    setupListener();

    return () => {
      if (unlisten) unlisten();
    };
  }, []);

  const handleSaveConnections = async (updated: DbConnectionConfig[]) => {
    setConnections(updated);
    try {
      await saveConnectionsList(updated);
    } catch (err) {
      console.error('Failed to save connections:', err);
    }
  };

  const handleSaveSettings = async (updated: AppSettings) => {
    setSettings(updated);
    try {
      await saveAppSettings(updated);
    } catch (err) {
      console.error('Failed to save settings:', err);
    }
  };

  const handleSaveAiConfig = async (aiConfig: AiConfig) => {
    const updated = { ...settings, default_ai: aiConfig };
    setSettings(updated);
    try {
      await saveAppSettings(updated);
    } catch (err) {
      console.error('Failed to save AI config:', err);
    }
  };

  const handlePickFolder = async () => {
    try {
      const selected = await pickDestinationFolder();
      if (selected) {
        const updated = { ...settings, output_dir: selected };
        setSettings(updated);
        await saveAppSettings(updated);
      }
    } catch (err) {
      console.error('Pick folder error:', err);
    }
  };

  const handlePickFolderForConn = async (connId: string) => {
    try {
      const selected = await pickDestinationFolder();
      if (selected) {
        const updated = connections.map((c) =>
          c.id === connId ? { ...c, output_folder: selected } : c
        );
        await handleSaveConnections(updated);
      }
    } catch (err) {
      console.error('Pick folder for connection error:', err);
    }
  };

  const handleResetFolderForConn = async (connId: string) => {
    const updated = connections.map((c) =>
      c.id === connId ? { ...c, output_folder: '' } : c
    );
    await handleSaveConnections(updated);
  };

  const handleOpenFolder = async (path: string) => {
    try {
      await openInExplorer(path);
    } catch (err) {
      console.error('Open folder error:', err);
    }
  };

  const handleToggleConnId = (id: string) => {
    setSelectedConnIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedConnIds(connections.map((c) => c.id));
  };

  const handleClearAll = () => {
    setSelectedConnIds([]);
  };

  const handleStartGenerate = async () => {
    if (selectedConnIds.length === 0) return;

    setIsGenerating(true);
    setIsProgressModalOpen(true);
    setLogs([`เริ่มกระบวนการสกัดข้อมูลสำหรับ ${selectedConnIds.length} ฐานข้อมูล...`]);
    setSummaries([]);
    setCurrentProgress({
      connection_id: '',
      connection_name: '',
      stage: 'connecting',
      table_index: 0,
      total_tables: 0,
      percent: 0,
      message: 'เริ่มต้นการทำงาน...',
      is_done: false,
      has_error: false,
    });

    try {
      const results = await generateKnowledge(selectedConnIds, settings.output_dir, maskPii);
      setSummaries(results);
      const allSuccess = results.length > 0 && results.every((r) => r.success);
      if (allSuccess) {
        setLogs((prev) => [...prev, '✓ สกัดข้อมูลเสร็จสมบูรณ์เรียบร้อยทุกรายการ!']);
      } else {
        setLogs((prev) => [...prev, '⚠ มีบางฐานข้อมูลเกิดข้อผิดพลาด กรุณาตรวจสอบผลลัพธ์']);
      }
    } catch (err: any) {
      setLogs((prev) => [...prev, `[ERROR] เกิดข้อผิดพลาดร้ายแรง: ${err}`]);
      setCurrentProgress({
        connection_id: '',
        connection_name: '',
        stage: 'error',
        current_table: null,
        table_index: 0,
        total_tables: 0,
        percent: 100,
        message: String(err),
        is_done: true,
        has_error: true,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="app-container">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        setTheme={setTheme}
        connectionsCount={connections.length}
      />

      <main className="app-content-body">
        {activeTab === 'generate' && (
          <GenerateTab
            connections={connections}
            selectedConnIds={selectedConnIds}
            onToggleConnId={handleToggleConnId}
            onSelectAll={handleSelectAll}
            onClearAll={handleClearAll}
            settings={settings}
            onPickFolder={handlePickFolder}
            onOpenFolder={handleOpenFolder}
            onPickFolderForConn={handlePickFolderForConn}
            onResetFolderForConn={handleResetFolderForConn}
            onStartGenerate={handleStartGenerate}
            isGenerating={isGenerating}
            maskPii={maskPii}
            setMaskPii={setMaskPii}
          />
        )}

        {activeTab === 'connections' && (
          <ConnectionsTab
            connections={connections}
            onSaveConnections={handleSaveConnections}
            defaultOutputDir={settings.output_dir}
          />
        )}

        {activeTab === 'ai' && (
          <AiSettingsTab
            aiConfig={settings.default_ai}
            onSaveAiConfig={handleSaveAiConfig}
          />
        )}

        {activeTab === 'docs' && (
          <DocViewerTab
            outputDir={settings.output_dir}
            connections={connections}
          />
        )}

        {activeTab === 'settings' && (
          <SettingsTab
            settings={settings}
            onSaveSettings={handleSaveSettings}
            onPickFolder={handlePickFolder}
            theme={theme}
            setTheme={setTheme}
          />
        )}
      </main>

      <ProgressModal
        isOpen={isProgressModalOpen}
        onClose={() => setIsProgressModalOpen(false)}
        progress={currentProgress}
        logs={logs}
        summaries={summaries}
        isGenerating={isGenerating}
        onOpenFolder={handleOpenFolder}
      />
    </div>
  );
};

export default App;
