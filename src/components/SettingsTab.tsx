import React, { useState } from 'react';
import {
  FolderOpen,
  FolderSearch,
  ShieldCheck,
  Palette,
  Info,
  CheckCircle2,
  Save,
} from 'lucide-react';
import type { AppSettings } from '../types';

interface SettingsTabProps {
  settings: AppSettings;
  onSaveSettings: (settings: AppSettings) => void;
  onPickFolder: () => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({
  settings,
  onSaveSettings,
  onPickFolder,
  theme,
  setTheme,
}) => {
  const [localSettings, setLocalSettings] = useState<AppSettings>({ ...settings });
  const [savedBanner, setSavedBanner] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveSettings(localSettings);
    setSavedBanner(true);
    setTimeout(() => setSavedBanner(false), 3000);
  };

  return (
    <div className="tab-pane settings-tab">
      <div className="section-header">
        <div>
          <h2 className="section-title">ตั้งค่าทั่วไปของแอปพลิเคชัน (Application Settings)</h2>
          <p className="section-desc">กำหนดค่าโฟลเดอร์เริ่มต้น, ธีมสี, และความปลอดภัย</p>
        </div>

        {savedBanner && (
          <div className="ux-badge ux-badge-mint animate-fade">
            <CheckCircle2 className="w-4 h-4" />
            <span>บันทึกการตั้งค่าแล้ว</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="settings-form">
        {/* Destination folder */}
        <div className="ux-glass-card setting-section-card">
          <div className="setting-card-title">
            <FolderOpen className="w-5 h-5 text-accent-2" />
            <div>
              <h3 className="card-title">โฟลเดอร์ปลายทางเริ่มต้น (Default Output Directory)</h3>
              <p className="card-desc">ตำแหน่งที่จะใช้เป็นค่าเริ่มต้นเมื่อเริ่มเปิดโปรแกรม</p>
            </div>
          </div>

          <div className="destination-input-group mt-3">
            <input
              type="text"
              className="ux-input"
              value={localSettings.output_dir}
              onChange={(e) => setLocalSettings({ ...localSettings, output_dir: e.target.value })}
            />
            <button type="button" className="ux-btn-secondary" onClick={onPickFolder}>
              <FolderSearch className="w-4 h-4" />
              <span>ค้นหาโฟลเดอร์...</span>
            </button>
          </div>
        </div>

        {/* Security / Masking */}
        <div className="ux-glass-card setting-section-card">
          <div className="setting-card-title">
            <ShieldCheck className="w-5 h-5 text-mint" />
            <div>
              <h3 className="card-title">การปกป้องข้อมูลส่วนบุคคล (PII Masking)</h3>
              <p className="card-desc">ตั้งค่าเปิดการ Mask ข้อมูลเป็นค่าเริ่มต้นสำหรับทุกการเชื่อมต่อ</p>
            </div>
          </div>

          <div
            className={`option-row mt-3 ${localSettings.mask_pii_default ? 'active' : ''}`}
            onClick={() =>
              setLocalSettings({ ...localSettings, mask_pii_default: !localSettings.mask_pii_default })
            }
          >
            <div className="option-text">
              <span className="option-name">เปิดใช้งาน Thai PII Masking โดยอัตโนมัติ</span>
              <span className="option-desc">
                เซ็นเซอร์เลขบัตรประชาชน 13 หลัก, ชื่อ-นามสกุล, และข้อมูลรูปภาพไบนารีใน sample rows
              </span>
            </div>
            <div className={`ux-toggle-switch ${localSettings.mask_pii_default ? 'checked' : ''}`}>
              <div className="toggle-thumb" />
            </div>
          </div>
        </div>

        {/* Appearance / Theme */}
        <div className="ux-glass-card setting-section-card">
          <div className="setting-card-title">
            <Palette className="w-5 h-5 text-accent" />
            <div>
              <h3 className="card-title">ธีมและรูปแบบการแสดงผล (Appearance)</h3>
              <p className="card-desc">สลับระหว่างโหมดมืด (Dark) และโหมดสว่าง (Light)</p>
            </div>
          </div>

          <div className="theme-selector-group mt-3">
            <button
              type="button"
              className={`theme-option-btn ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => {
                setTheme('dark');
                setLocalSettings({ ...localSettings, theme: 'dark' });
              }}
            >
              <div className="theme-preview dark-preview" />
              <span>Dark Theme (แนะนำ)</span>
            </button>

            <button
              type="button"
              className={`theme-option-btn ${theme === 'light' ? 'active' : ''}`}
              onClick={() => {
                setTheme('light');
                setLocalSettings({ ...localSettings, theme: 'light' });
              }}
            >
              <div className="theme-preview light-preview" />
              <span>Light Theme</span>
            </button>
          </div>
        </div>

        {/* About App Card */}
        <div className="ux-glass-card setting-section-card about-card">
          <div className="setting-card-title">
            <Info className="w-5 h-5 text-accent" />
            <div>
              <h3 className="card-title">เกี่ยวกับ DB Knowledge Windows App</h3>
              <p className="card-desc">สถาปัตยกรรมและเทคโนโลยีที่ใช้ในโปรเจคนี้</p>
            </div>
          </div>

          <div className="about-tech-grid mt-3">
            <div className="tech-item">
              <span className="tech-label">Desktop Engine:</span>
              <span className="tech-val">Tauri v2 (Native Rust)</span>
            </div>
            <div className="tech-item">
              <span className="tech-label">Design &amp; UI System:</span>
              <span className="tech-val">Lucian UX/UI Prompt Component Style</span>
            </div>
            <div className="tech-item">
              <span className="tech-label">Font Family:</span>
              <span className="tech-val">LINE Seed Sans TH (Self-hosted Web Font)</span>
            </div>
            <div className="tech-item">
              <span className="tech-label">Database Support:</span>
              <span className="tech-val">MySQL &amp; MariaDB (Read-only SELECT)</span>
            </div>
          </div>
        </div>

        <div className="form-actions-bar">
          <button type="submit" className="ux-liquid-btn">
            <span className="ux-sheen" />
            <Save className="w-4 h-4" />
            <span>บันทึกการตั้งค่าทั้งหมด</span>
          </button>
        </div>
      </form>
    </div>
  );
};
