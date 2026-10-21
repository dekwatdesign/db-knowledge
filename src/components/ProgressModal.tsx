import React, { useEffect, useRef } from 'react';
import { CheckCircle2, AlertCircle, Loader2, FolderOpen, X, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { ProgressPayload, GenerationSummary } from '../types';

interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: ProgressPayload | null;
  logs: string[];
  summaries: GenerationSummary[];
  isGenerating: boolean;
  onOpenFolder: (path: string) => void;
}

export const ProgressModal: React.FC<ProgressModalProps> = ({
  isOpen,
  onClose,
  progress,
  logs,
  summaries,
  isGenerating,
  onOpenFolder,
}) => {
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  useEffect(() => {
    if (!isGenerating && summaries.length > 0 && summaries.every((s) => s.success)) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7A5AF8', '#36BFFA', '#10B981'],
      });
    }
  }, [isGenerating, summaries]);

  if (!isOpen) return null;

  const isFinished = !isGenerating;
  const hasErrors = summaries.some((s) => !s.success) || progress?.has_error;

  return (
    <div className="modal-backdrop">
      <div className="modal-content ux-glass-card progress-modal">
        <div className="modal-header">
          <div className="modal-title-wrap">
            {isGenerating ? (
              <Loader2 className="w-5 h-5 animate-spin text-accent" />
            ) : hasErrors ? (
              <AlertCircle className="w-5 h-5 text-danger" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-mint" />
            )}
            <div>
              <h3 className="modal-title">
                {isGenerating
                  ? 'กำลังสร้างเอกสาร Markdown...'
                  : hasErrors
                  ? 'พบข้อผิดพลาดระหว่างสร้างเอกสาร'
                  : 'สร้างเอกสาร Markdown เรียบร้อยแล้ว!'}
              </h3>
              <p className="modal-subtitle">
                {progress?.connection_name ? `ฐานข้อมูล: ${progress.connection_name}` : 'กำลังประมวลผลข้อมูล'}
              </p>
            </div>
          </div>

          {isFinished && (
            <button className="icon-btn-close" onClick={onClose} title="ปิดหน้าต่าง">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Progress Bar */}
        <div className="progress-section">
          <div className="progress-bar-wrapper">
            <div
              className={`progress-bar-fill ${isGenerating ? 'generating' : ''}`}
              style={{
                width: `${Math.min(Math.max(progress?.percent || 0, 0), 100)}%`,
                background: hasErrors ? 'var(--ux-danger)' : undefined,
              }}
            />
          </div>
          <div className="progress-meta">
            <span className="progress-msg" style={{ color: hasErrors ? 'var(--ux-danger)' : undefined }}>
              {progress?.message || 'กำลังเตรียมการ...'}
            </span>
            <span className="progress-pct" style={{ color: hasErrors ? 'var(--ux-danger)' : undefined }}>
              {Math.round(progress?.percent || 0)}%
            </span>
          </div>
        </div>

        {/* Live Logs Terminal */}
        <div className="terminal-container">
          <div className="terminal-header">
            <Terminal className="w-3.5 h-3.5" />
            <span>Generation Logs</span>
            <span
              className="terminal-dot"
              style={{ background: hasErrors ? 'var(--ux-danger)' : isGenerating ? 'var(--ux-accent)' : 'var(--ux-mint)' }}
            />
          </div>
          <div className="terminal-body">
            {logs.map((log, idx) => (
              <div key={idx} className="terminal-line">
                <span className="terminal-prefix">&gt;</span>
                <span className="terminal-text" style={log.includes('[ERROR]') ? { color: '#F87171' } : undefined}>
                  {log}
                </span>
              </div>
            ))}
            <div ref={logEndRef} />
          </div>
        </div>

        {/* Summaries when finished */}
        {isFinished && summaries.length > 0 && (
          <div className="summaries-list">
            <h4 className="summaries-title">ผลลัพธ์การสร้างเอกสาร ({summaries.length} ฐานข้อมูล)</h4>
            <div className="summaries-grid">
              {summaries.map((s) => (
                <div key={s.connection_id} className={`summary-card ${s.success ? 'success' : 'failed'}`}>
                  <div className="summary-card-main">
                    <span className="summary-name">{s.connection_name}</span>
                    <span className="summary-meta">
                      {s.success ? (
                        <>
                          <span className="ux-badge ux-badge-mint">{s.tables_count} ตาราง</span>
                          <span className="text-muted">ใน {s.time_taken_seconds.toFixed(1)} วิ</span>
                        </>
                      ) : (
                        <span className="ux-badge ux-badge-danger">เกิดข้อผิดพลาด</span>
                      )}
                    </span>
                  </div>
                  {s.success && (
                    <button
                      className="ux-btn-secondary btn-sm"
                      onClick={() => onOpenFolder(s.output_path)}
                      title="เปิดโฟลเดอร์ใน Windows Explorer"
                    >
                      <FolderOpen className="w-3.5 h-3.5" />
                      <span>เปิดโฟลเดอร์</span>
                    </button>
                  )}
                  {s.error && <p className="summary-error">{s.error}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="modal-footer">
          {isFinished ? (
            <button
              className="ux-liquid-btn"
              onClick={onClose}
              style={hasErrors ? { background: 'linear-gradient(135deg, #EF4444, #DC2626)' } : undefined}
            >
              <span className="ux-sheen" />
              {hasErrors ? <X className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
              <span>{hasErrors ? 'ปิดหน้าต่าง' : 'เสร็จสิ้น (ปิดหน้าต่าง)'}</span>
            </button>
          ) : (
            <button className="ux-btn-secondary" disabled>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>กำลังดำเนินการ...</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
