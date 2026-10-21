import React, { useState } from 'react';
import {
  Activity,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Save,
  Cpu,
  Loader2,
} from 'lucide-react';
import type { AiConfig, AiApiType } from '../types';
import { testAi } from '../api';

interface AiSettingsTabProps {
  aiConfig: AiConfig;
  onSaveAiConfig: (config: AiConfig) => void;
}

export const AiSettingsTab: React.FC<AiSettingsTabProps> = ({
  aiConfig,
  onSaveAiConfig,
}) => {
  const [config, setConfig] = useState<AiConfig>({ ...aiConfig });
  const [showKey, setShowKey] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ ok: boolean; msg: string } | null>(null);
  const [savedBanner, setSavedBanner] = useState(false);

  const providers: { id: AiApiType; label: string; desc: string; defaultUrl: string; defaultModel: string }[] = [
    {
      id: 'ollama',
      label: 'Ollama (Local LLM)',
      desc: 'รันในเครื่องผ่าน Ollama API ไม่ส่งข้อมูลออกภายนอก',
      defaultUrl: 'http://127.0.0.1:11434',
      defaultModel: 'qwen2.5-coder:7b',
    },
    {
      id: 'openai',
      label: 'OpenAI / Compatible Gateway',
      desc: 'รองรับ OpenAI, Ollama v1, LocalAI หรือ Gateway ที่เป็น v1/chat/completions',
      defaultUrl: 'https://api.openai.com/v1',
      defaultModel: 'gpt-4o-mini',
    },
    {
      id: 'anthropic',
      label: 'Anthropic Claude',
      desc: 'รองรับ Claude 3.5 Sonnet / Haiku ผ่าน Messages API',
      defaultUrl: 'https://api.anthropic.com/v1',
      defaultModel: 'claude-3-5-sonnet-20241022',
    },
    {
      id: 'gemini',
      label: 'Google Gemini',
      desc: 'รองรับ Gemini 1.5 Flash / 2.0 ผ่าน generateContent API',
      defaultUrl: 'https://generativelanguage.googleapis.com/v1beta',
      defaultModel: 'gemini-1.5-flash',
    },
    {
      id: 'disabled',
      label: 'ปิดการใช้งาน AI (Fallback Only)',
      desc: 'สร้างภาพรวมจาก Metadata ล้วนโดยไม่เรียก LLM ประหยัดโทเค็นและเร็วที่สุด',
      defaultUrl: '',
      defaultModel: '',
    },
  ];

  const handleSelectProvider = (prov: typeof providers[0]) => {
    setConfig({
      ...config,
      api_type: prov.id,
      base_url: config.base_url || prov.defaultUrl,
      model: config.model || prov.defaultModel,
    });
  };

  const handleTest = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      const res = await testAi(config);
      setTestResult({
        ok: true,
        msg: `เชื่อมต่อสำเร็จ: ${res.slice(0, 150)}`,
      });
    } catch (err: any) {
      setTestResult({
        ok: false,
        msg: String(err),
      });
    } finally {
      setTesting(false);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveAiConfig(config);
    setSavedBanner(true);
    setTimeout(() => setSavedBanner(false), 3000);
  };

  return (
    <div className="tab-pane ai-settings-tab">
      <div className="section-header">
        <div>
          <h2 className="section-title">ตั้งค่า AI Service (Schema Overview Generator)</h2>
          <p className="section-desc">
            ใช้สำหรับวิเคราะห์และสร้างไฟล์ <code>AI_CONTEXT.md</code> เพื่อให้ LLM ตัวอื่นเข้าใจบริบทของฐานข้อมูล
          </p>
        </div>

        {savedBanner && (
          <div className="ux-badge ux-badge-mint animate-fade">
            <CheckCircle2 className="w-4 h-4" />
            <span>บันทึกการตั้งค่าเรียบร้อยแล้ว</span>
          </div>
        )}
      </div>

      {/* Provider Selector Cards (Lucian Radio Card Group) */}
      <div className="providers-grid">
        {providers.map((p) => {
          const isSelected = config.api_type === p.id;
          return (
            <div
              key={p.id}
              className={`provider-card ux-glass-card ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelectProvider(p)}
            >
              <div className="provider-card-header">
                <div className={`radio-dot ${isSelected ? 'checked' : ''}`} />
                <span className="provider-name">{p.label}</span>
              </div>
              <p className="provider-desc">{p.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Configuration Form */}
      {config.api_type !== 'disabled' && (
        <form onSubmit={handleSave} className="ai-config-form ux-glass-card">
          <div className="form-grid">
            {/* Base URL */}
            <div className="form-group col-span-2">
              <label className="form-label">API Base URL (ไม่รวม endpoint ย่อย)</label>
              <input
                type="text"
                className="ux-input"
                value={config.base_url}
                onChange={(e) => setConfig({ ...config, base_url: e.target.value })}
                placeholder="เช่น http://127.0.0.1:11434 หรือ https://api.openai.com/v1"
                required
              />
              <span className="form-hint">
                หมายเหตุ: สำหรับ OpenAI-compatible ต้องระบุ prefix เช่น <code>/v1</code> ด้วย
              </span>
            </div>

            {/* Model ID */}
            <div className="form-group">
              <label className="form-label">Model Identifier</label>
              <input
                type="text"
                className="ux-input"
                value={config.model}
                onChange={(e) => setConfig({ ...config, model: e.target.value })}
                placeholder="เช่น qwen2.5-coder:7b, gpt-4o, claude-3-5-sonnet"
                required
              />
            </div>

            {/* Timeout */}
            <div className="form-group">
              <label className="form-label">Timeout (วินาที)</label>
              <input
                type="number"
                min="10"
                max="600"
                className="ux-input"
                value={config.timeout_seconds}
                onChange={(e) => setConfig({ ...config, timeout_seconds: Number(e.target.value) || 180 })}
              />
            </div>

            {/* API Key */}
            <div className="form-group col-span-2">
              <label className="form-label">API Key (สำหรับบริการที่ต้องใช้ Credential)</label>
              <div className="input-with-icon">
                <input
                  type={showKey ? 'text' : 'password'}
                  className="ux-input"
                  value={config.api_key}
                  onChange={(e) => setConfig({ ...config, api_key: e.target.value })}
                  placeholder={config.api_type === 'ollama' ? 'Ollama ในเครื่องไม่ต้องใส่ Key' : 'sk-...'}
                />
                <button
                  type="button"
                  className="inner-input-btn"
                  onClick={() => setShowKey(!showKey)}
                >
                  {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Allow Remote Toggle */}
            <div className="form-group col-span-2">
              <div
                className={`option-row ${config.allow_remote ? 'active' : ''}`}
                onClick={() => setConfig({ ...config, allow_remote: !config.allow_remote })}
              >
                <div className="option-icon-box">
                  <Cpu className="w-4 h-4 text-accent" />
                </div>
                <div className="option-text">
                  <span className="option-name">อนุญาตส่ง Metadata ออกนอก Loopback (Allow Remote)</span>
                  <span className="option-desc">
                    เปิดใช้งานเมื่อเชื่อมต่อไปยัง API นอกเครื่องหรือระบบคลาวด์ (ส่งเฉพาะชื่อตาราง, คอลัมน์ และความสัมพันธ์)
                  </span>
                </div>
                <div className={`ux-toggle-switch ${config.allow_remote ? 'checked' : ''}`}>
                  <div className="toggle-thumb" />
                </div>
              </div>
            </div>
          </div>

          {/* Test feedback */}
          {testResult && (
            <div className={`test-feedback-box ${testResult.ok ? 'success' : 'failed'}`}>
              {testResult.ok ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0" />
                  <div className="test-feedback-info">
                    <strong>ทดสอบสำเร็จ!</strong>
                    <span>{testResult.msg}</span>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-danger flex-shrink-0" />
                  <div className="test-feedback-info">
                    <strong>เกิดข้อผิดพลาดในการทดสอบ:</strong>
                    <span>{testResult.msg}</span>
                  </div>
                </>
              )}
            </div>
          )}

          <div className="form-actions-bar">
            <button
              type="button"
              className="ux-btn-secondary"
              disabled={testing || !config.model}
              onClick={handleTest}
            >
              {testing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Activity className="w-4 h-4" />}
              <span>ทดสอบเรียก AI Model</span>
            </button>

            <button type="submit" className="ux-liquid-btn">
              <span className="ux-sheen" />
              <Save className="w-4 h-4" />
              <span>บันทึกการตั้งค่า AI</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
