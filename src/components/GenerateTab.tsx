import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  FolderOpen,
  FolderSearch,
  Sparkles,
  ShieldCheck,
  Bot,
  Database,
  ArrowRight,
  Server,
  Activity,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Folder,
  RotateCcw,
} from 'lucide-react';
import type { DbConnectionConfig, AppSettings } from '../types';
import { testDb } from '../api';

interface GenerateTabProps {
  connections: DbConnectionConfig[];
  selectedConnIds: string[];
  onToggleConnId: (id: string) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
  settings: AppSettings;
  onPickFolder: () => void;
  onOpenFolder: (path: string) => void;
  onPickFolderForConn: (connId: string) => void;
  onResetFolderForConn: (connId: string) => void;
  onStartGenerate: () => void;
  isGenerating: boolean;
  maskPii: boolean;
  setMaskPii: (mask: boolean) => void;
}

export const GenerateTab: React.FC<GenerateTabProps> = ({
  connections,
  selectedConnIds,
  onToggleConnId,
  onSelectAll,
  onClearAll,
  settings,
  onPickFolder,
  onOpenFolder,
  onPickFolderForConn,
  onResetFolderForConn,
  onStartGenerate,
  isGenerating,
  maskPii,
  setMaskPii,
}) => {
  const [testingId, setTestingId] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<Record<string, { ok: boolean; msg: string; latency?: number }>>({});

  const handleTestConnection = async (conn: DbConnectionConfig, e: React.MouseEvent) => {
    e.stopPropagation();
    setTestingId(conn.id);
    try {
      const res = await testDb(conn);
      setTestResults((prev) => ({
        ...prev,
        [conn.id]: {
          ok: res.success,
          msg: res.message,
          latency: res.latency_ms || undefined,
        },
      }));
    } catch (err: any) {
      setTestResults((prev) => ({
        ...prev,
        [conn.id]: {
          ok: false,
          msg: String(err),
        },
      }));
    } finally {
      setTestingId(null);
    }
  };

  const selectedCount = selectedConnIds.length;

  return (
    <div className="tab-pane generate-tab">
      {/* Top Banner / Hero */}
      <div className="hero-banner ux-glass-card">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>MySQL Schema &amp; Data → Markdown Knowledge</span>
          </div>
          <h1 className="hero-title">สร้างเอกสารฐานข้อมูลพร้อมใช้งานกับ LLM</h1>
          <p className="hero-desc">
            เลือกการเชื่อมต่อฐานข้อมูลที่ต้องการ และโฟลเดอร์ปลายทาง เพื่อสกัดตาราง, คอลัมน์, Foreign Keys,
            ตัวอย่างข้อมูลแบบปลอดภัย พร้อมสรุปภาพรวม AI ด้วยคำสั่ง SELECT เท่านั้น
          </p>
        </div>
      </div>

      <div className="generate-grid">
        {/* Left Column: Connections Selector */}
        <div className="section-block">
          <div className="section-header">
            <div className="section-title-wrap">
              <Server className="w-5 h-5 text-accent" />
              <div>
                <h2 className="section-title">เลือกการเชื่อมต่อฐานข้อมูล (Connections)</h2>
                <p className="section-desc">สามารถเลือกได้หลาย connection พร้อมกันเพื่อ generate ครั้งเดียว</p>
              </div>
            </div>

            <div className="section-actions">
              <button className="ux-btn-secondary btn-sm" onClick={onSelectAll}>
                <CheckSquare className="w-3.5 h-3.5" />
                <span>เลือกทั้งหมด ({connections.length})</span>
              </button>
              <button className="ux-btn-secondary btn-sm" onClick={onClearAll}>
                <Square className="w-3.5 h-3.5" />
                <span>ล้างการเลือก</span>
              </button>
            </div>
          </div>

          {connections.length === 0 ? (
            <div className="empty-connections-card ux-glass-card">
              <Database className="w-10 h-10 text-muted" />
              <p>ยังไม่มีการเชื่อมต่อที่บันทึกไว้</p>
              <span className="text-muted text-sm">ไปที่แท็บ "จัดการ Connection" เพื่อเพิ่มฐานข้อมูล</span>
            </div>
          ) : (
            <div className="connections-selector-list">
              {connections.map((conn) => {
                const isSelected = selectedConnIds.includes(conn.id);
                const testRes = testResults[conn.id];
                const isTesting = testingId === conn.id;

                return (
                  <div
                    key={conn.id}
                    className={`conn-card ux-glass-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => onToggleConnId(conn.id)}
                  >
                    <div className="conn-card-checkbox">
                      {isSelected ? (
                        <div className="checkbox-custom checked">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      ) : (
                        <div className="checkbox-custom" />
                      )}
                    </div>

                    <div className="conn-card-info">
                      <div className="conn-card-title-row">
                        <span className="conn-name">{conn.name}</span>
                        <span className="conn-db-pill">`{conn.database}`</span>
                      </div>
                      <div className="conn-card-meta">
                        <span>{conn.host}:{conn.port}</span>
                        <span className="meta-sep">•</span>
                        <span>User: {conn.user}</span>
                      </div>
                      <div className="conn-card-dest-row">
                        <Folder className="w-3.5 h-3.5 text-accent-2 flex-shrink-0" />
                        <span
                          className="dest-text"
                          title={conn.output_folder || `${settings.output_dir}\\${conn.database}`}
                        >
                          ปลายทาง: {conn.output_folder ? (
                            <strong className="text-accent font-mono text-xs">{conn.output_folder}</strong>
                          ) : (
                            <span className="text-muted font-mono text-xs">{settings.output_dir}\{conn.database}</span>
                          )}
                        </span>
                        <button
                          type="button"
                          className="btn-change-folder"
                          onClick={(e) => {
                            e.stopPropagation();
                            onPickFolderForConn(conn.id);
                          }}
                          title="เปลี่ยนโฟลเดอร์ปลายทางสำหรับฐานข้อมูลนี้"
                        >
                          <FolderSearch className="w-3.5 h-3.5 text-accent" />
                          <span>เลือกโฟลเดอร์</span>
                        </button>
                      </div>
                    </div>

                    <div className="conn-card-actions" onClick={(e) => e.stopPropagation()}>
                      {testRes && (
                        <span
                          className={`ux-badge ${testRes.ok ? 'ux-badge-mint' : 'ux-badge-danger'}`}
                          title={testRes.msg}
                        >
                          {testRes.ok ? (
                            <>
                              <CheckCircle2 className="w-3 h-3" />
                              {testRes.latency ? `${testRes.latency}ms` : 'เชื่อมต่อได้'}
                            </>
                          ) : (
                            <>
                              <AlertCircle className="w-3 h-3" />
                              ข้อผิดพลาด
                            </>
                          )}
                        </span>
                      )}

                      <button
                        className="ux-btn-secondary btn-sm"
                        disabled={isTesting}
                        onClick={(e) => handleTestConnection(conn, e)}
                        title="ทดสอบการเชื่อมต่อ MySQL"
                      >
                        {isTesting ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Activity className="w-3.5 h-3.5" />
                        )}
                        <span>ทดสอบ</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: Output Destination & Generation Options */}
        <div className="section-block right-column">
          {/* Destination per Database Section */}
          <div className="ux-glass-card destination-card">
            <div className="card-header-simple">
              <FolderOpen className="w-5 h-5 text-accent-2" />
              <div>
                <h3 className="card-title">ปลายทางบันทึกไฟล์แยกตามฐานข้อมูล (Destinations per Database)</h3>
                <p className="card-desc">กำหนดและตรวจสอบโฟลเดอร์ปลายทางสำหรับแต่ละฐานข้อมูลที่เลือก</p>
              </div>
            </div>

            {selectedCount === 0 ? (
              <div className="empty-destinations-hint">
                <span className="text-muted text-sm">
                  👈 กรุณาเลือกฐานข้อมูลทางด้านซ้ายเพื่อดูและปรับแต่งโฟลเดอร์ปลายทาง
                </span>
              </div>
            ) : (
              <div className="selected-destinations-list">
                {connections
                  .filter((c) => selectedConnIds.includes(c.id))
                  .map((conn) => {
                    const isCustom = Boolean(conn.output_folder);
                    const effectivePath = conn.output_folder || `${settings.output_dir}\\${conn.database}`;

                    return (
                      <div key={conn.id} className="selected-dest-item">
                        <div className="dest-item-header">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-ink">{conn.name}</span>
                            <span className="conn-db-pill">`{conn.database}`</span>
                          </div>
                          {isCustom ? (
                            <span className="ux-badge ux-badge-accent text-xs">โฟลเดอร์เฉพาะ</span>
                          ) : (
                            <span className="ux-badge text-xs">ใช้ค่าเริ่มต้น</span>
                          )}
                        </div>

                        <div className="dest-item-input-row">
                          <div className="dest-path-box" title={effectivePath}>
                            <Folder className="w-4 h-4 text-accent-2 flex-shrink-0" />
                            <span className="dest-path-text font-mono text-xs truncate">
                              {effectivePath}
                            </span>
                          </div>

                          <div className="dest-actions-btns">
                            <button
                              type="button"
                              className="ux-btn-secondary btn-sm"
                              onClick={() => onPickFolderForConn(conn.id)}
                              title="เลือกโฟลเดอร์ในเครื่องสำหรับฐานข้อมูลนี้"
                            >
                              <FolderSearch className="w-3.5 h-3.5 text-accent" />
                              <span>เลือกโฟลเดอร์</span>
                            </button>

                            {isCustom && (
                              <button
                                type="button"
                                className="ux-btn-secondary btn-sm"
                                onClick={() => onResetFolderForConn(conn.id)}
                                title="รีเซ็ตกลับไปใช้โฟลเดอร์เริ่มต้นส่วนกลาง"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                              </button>
                            )}

                            <button
                              type="button"
                              className="ux-btn-secondary btn-sm"
                              onClick={() => onOpenFolder(effectivePath)}
                              title="เปิดโฟลเดอร์ใน Windows Explorer"
                            >
                              <FolderOpen className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}

            {/* Default Global Output Dir Notice */}
            <div className="default-output-box mt-3 pt-3 border-t border-line">
              <div className="flex items-center justify-between text-xs text-muted mb-1.5">
                <span className="font-semibold text-ink-2">โฟลเดอร์หลักเริ่มต้นส่วนกลาง (Default Base Folder):</span>
                <button
                  type="button"
                  className="btn-text-link text-xs flex items-center gap-1"
                  onClick={onPickFolder}
                  title="เปลี่ยนโฟลเดอร์หลักส่วนกลาง"
                >
                  <FolderSearch className="w-3 h-3 text-accent" />
                  <span>เปลี่ยนโฟลเดอร์หลัก</span>
                </button>
              </div>
              <div className="default-path-row">
                <span className="font-mono text-xs text-muted truncate max-w-[340px]" title={settings.output_dir}>
                  {settings.output_dir}
                </span>
                <button
                  type="button"
                  className="btn-text-link text-xs flex items-center gap-1"
                  onClick={() => onOpenFolder(settings.output_dir)}
                  title="เปิดโฟลเดอร์หลักใน Explorer"
                >
                  <FolderOpen className="w-3 h-3" />
                  <span>เปิด</span>
                </button>
              </div>
            </div>
          </div>

          {/* Options Card */}
          <div className="ux-glass-card options-card">
            <h3 className="card-title">ตัวเลือกเพิ่มเติมสำหรับการ Generate</h3>

            <div className="options-list">
              {/* Data Masking Toggle */}
              <div
                className={`option-row ${maskPii ? 'active' : ''}`}
                onClick={() => setMaskPii(!maskPii)}
              >
                <div className="option-icon-box">
                  <ShieldCheck className="w-4 h-4 text-mint" />
                </div>
                <div className="option-text">
                  <span className="option-name">Mask ข้อมูลสุขภาพและข้อมูลส่วนบุคคล (PII Masking)</span>
                  <span className="option-desc">
                    เซ็นเซอร์เลขบัตรประชาชน (CID 13 หลัก), ชื่อ-นามสกุลผู้ป่วย/เจ้าหน้าที่, รูปภาพ BLOB
                  </span>
                </div>
                <div className={`ux-toggle-switch ${maskPii ? 'checked' : ''}`}>
                  <div className="toggle-thumb" />
                </div>
              </div>

              {/* AI Summary Info */}
              <div className="option-row info-only">
                <div className="option-icon-box">
                  <Bot className="w-4 h-4 text-accent" />
                </div>
                <div className="option-text">
                  <span className="option-name">AI Context Overview ({settings.default_ai.api_type})</span>
                  <span className="option-desc">
                    โมเดล: <code>{settings.default_ai.model}</code> (สามารถปรับแต่ง protocol และ endpoint ได้ที่แท็บ AI Service)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Generate Action CTA Card */}
          <div className="generate-cta-box ux-glass-card">
            <div className="cta-meta">
              <span className="cta-selected-text">
                เลือกแล้ว <strong className="text-accent">{selectedCount}</strong> จาก {connections.length} ฐานข้อมูล
              </span>
              <span className="cta-sub">
                {selectedCount > 0
                  ? 'พร้อมเริ่มกระบวนการสกัดโครงสร้าง schema และตัวอย่างข้อมูล'
                  : 'กรุณาเลือกอย่างน้อย 1 ฐานข้อมูลทางด้านซ้าย'}
              </span>
            </div>

            <button
              className="ux-liquid-btn generate-main-btn"
              disabled={selectedCount === 0 || isGenerating}
              onClick={onStartGenerate}
            >
              <span className="ux-sheen" />
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>กำลัง Generate...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>
                    {selectedCount === 0
                      ? 'โปรดเลือกฐานข้อมูล'
                      : selectedCount === 1
                      ? 'เริ่มสร้าง Markdown (1 ฐานข้อมูล)'
                      : `เริ่มสร้าง Markdown (${selectedCount} ฐานข้อมูล)`}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
