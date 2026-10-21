import React, { useState } from 'react';
import {
  Plus,
  Server,
  Edit2,
  Trash2,
  Copy,
  Activity,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Folder,
  FolderSearch,
  FolderOpen,
  ExternalLink,
  RotateCcw,
  Loader2,
  ListFilter,
  X,
  Save,
} from 'lucide-react';
import type { DbConnectionConfig } from '../types';
import { testDb, fetchTables, pickDestinationFolder, openInExplorer } from '../api';

interface ConnectionsTabProps {
  connections: DbConnectionConfig[];
  onSaveConnections: (conns: DbConnectionConfig[]) => void;
  defaultOutputDir?: string;
}

export const ConnectionsTab: React.FC<ConnectionsTabProps> = ({
  connections,
  onSaveConnections,
  defaultOutputDir,
}) => {
  const [editingConn, setEditingConn] = useState<DbConnectionConfig | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ ok: boolean; msg: string; version?: string; tables?: number; latency?: number } | null>(null);

  // Table selector state
  const [fetchingTables, setFetchingTables] = useState(false);
  const [availableTables, setAvailableTables] = useState<string[]>([]);
  const [showTableSelector, setShowTableSelector] = useState(false);

  const handleOpenAdd = () => {
    const newConn: DbConnectionConfig = {
      id: `conn-${Date.now()}`,
      name: `New Database ${connections.length + 1}`,
      host: '127.0.0.1',
      port: 3306,
      database: '',
      user: 'root',
      password: '',
      sample_rows: 8,
      sample_max_chars: 1000,
      output_folder: '',
      mask_pii: false,
      ai_override: null,
      selected_tables: null,
    };
    setEditingConn(newConn);
    setTestResult(null);
    setShowTableSelector(false);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (conn: DbConnectionConfig) => {
    setEditingConn({ ...conn });
    setTestResult(null);
    setShowTableSelector(false);
    setIsModalOpen(true);
  };

  const handleDuplicate = (conn: DbConnectionConfig) => {
    const copy: DbConnectionConfig = {
      ...conn,
      id: `conn-${Date.now()}`,
      name: `${conn.name} (Copy)`,
      output_folder: `${conn.output_folder || conn.database}_copy`,
    };
    onSaveConnections([...connections, copy]);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบการเชื่อมต่อ "${name}"?`)) {
      onSaveConnections(connections.filter((c) => c.id !== id));
    }
  };

  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingConn) return;

    if (!editingConn.name.trim() || !editingConn.host.trim() || !editingConn.database.trim()) {
      alert('กรุณากรอกชื่อการเชื่อมต่อ, Host และ Database name ให้ครบถ้วน');
      return;
    }

    const updated = connections.some((c) => c.id === editingConn.id)
      ? connections.map((c) => (c.id === editingConn.id ? editingConn : c))
      : [...connections, editingConn];

    onSaveConnections(updated);
    setIsModalOpen(false);
  };

  const handleTestModalConn = async () => {
    if (!editingConn) return;
    setTesting(true);
    setTestResult(null);
    try {
      const res = await testDb(editingConn);
      setTestResult({
        ok: res.success,
        msg: res.message,
        version: res.version || undefined,
        tables: res.table_count || undefined,
        latency: res.latency_ms || undefined,
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

  const handleFetchTablesList = async () => {
    if (!editingConn) return;
    setFetchingTables(true);
    try {
      const tables = await fetchTables(editingConn);
      setAvailableTables(tables.map((t) => t.name));
      setShowTableSelector(true);
    } catch (err: any) {
      alert(`ไม่สามารถดึงรายชื่อตารางได้: ${err}`);
    } finally {
      setFetchingTables(false);
    }
  };

  const toggleTableSelection = (tableName: string) => {
    if (!editingConn) return;
    const current = editingConn.selected_tables || [];
    const next = current.includes(tableName)
      ? current.filter((t) => t !== tableName)
      : [...current, tableName];
    setEditingConn({ ...editingConn, selected_tables: next.length > 0 ? next : null });
  };

  return (
    <div className="tab-pane connections-tab">
      <div className="section-header">
        <div>
          <h2 className="section-title">จัดการการเชื่อมต่อฐานข้อมูล (Database Profiles)</h2>
          <p className="section-desc">
            บันทึกและจัดการข้อมูลการเชื่อมต่อ MySQL เพื่อใช้เลือก generate ได้หลายตัวตามต้องการ
          </p>
        </div>

        <button className="ux-liquid-btn btn-sm" onClick={handleOpenAdd}>
          <span className="ux-sheen" />
          <Plus className="w-4 h-4" />
          <span>เพิ่ม Connection ใหม่</span>
        </button>
      </div>

      {connections.length === 0 ? (
        <div className="empty-connections-card ux-glass-card">
          <Server className="w-12 h-12 text-muted" />
          <h3>ยังไม่มีการเชื่อมต่อฐานข้อมูล</h3>
          <p className="text-muted">คลิกปุ่มด้านบนเพื่อเพิ่ม Connection แรกของคุณ</p>
        </div>
      ) : (
        <div className="connections-grid">
          {connections.map((conn) => (
            <div key={conn.id} className="conn-profile-card ux-glass-card">
              <div className="profile-card-top">
                <div className="profile-icon">
                  <Server className="w-5 h-5 text-accent" />
                </div>
                <div className="profile-titles">
                  <h3 className="profile-name">{conn.name}</h3>
                  <span className="profile-db-tag">`{conn.database}`</span>
                </div>
              </div>

              <div className="profile-details-list">
                <div className="detail-item">
                  <span className="detail-label">Host / Port:</span>
                  <span className="detail-value">{conn.host}:{conn.port}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Username:</span>
                  <span className="detail-value">{conn.user}</span>
                </div>
                <div className="detail-item destination-detail">
                  <span className="detail-label">โฟลเดอร์ปลายทาง:</span>
                  <span
                    className="detail-value font-mono text-xs flex items-center gap-1.5"
                    title={
                      conn.output_folder
                        ? conn.output_folder
                        : defaultOutputDir
                        ? `${defaultOutputDir}\\${conn.database}`
                        : `[เริ่มต้น]\\${conn.database}`
                    }
                  >
                    <Folder className="w-3.5 h-3.5 text-accent-2 flex-shrink-0" />
                    <span className="truncate max-w-[210px]">
                      {conn.output_folder || `[เริ่มต้น]\\${conn.database}`}
                    </span>
                    {conn.output_folder && (
                      <button
                        type="button"
                        className="btn-icon-tiny"
                        onClick={(e) => {
                          e.stopPropagation();
                          openInExplorer(conn.output_folder);
                        }}
                        title="เปิดโฟลเดอร์ใน Explorer"
                      >
                        <ExternalLink className="w-3 h-3 text-muted hover:text-accent" />
                      </button>
                    )}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Sample Limit:</span>
                  <span className="detail-value">{conn.sample_rows} แถว (max {conn.sample_max_chars} ตัวอักษร)</span>
                </div>
                {conn.selected_tables && (
                  <div className="detail-item">
                    <span className="detail-label">เลือกเฉพาะตาราง:</span>
                    <span className="ux-badge ux-badge-accent">{conn.selected_tables.length} ตาราง</span>
                  </div>
                )}
              </div>

              <div className="profile-card-footer">
                <button
                  className="ux-btn-secondary btn-sm"
                  onClick={() => handleOpenEdit(conn)}
                  title="แก้ไขการเชื่อมต่อ"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>แก้ไข</span>
                </button>
                <button
                  className="ux-btn-secondary btn-sm"
                  onClick={() => handleDuplicate(conn)}
                  title="คัดลอก Connection"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
                <button
                  className="ux-btn-secondary btn-sm text-danger"
                  onClick={() => handleDelete(conn.id, conn.name)}
                  title="ลบ Connection"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit / Add Modal */}
      {isModalOpen && editingConn && (
        <div className="modal-backdrop">
          <div className="modal-content ux-glass-card modal-lg">
            <div className="modal-header">
              <div className="modal-title-wrap">
                <Server className="w-5 h-5 text-accent" />
                <div>
                  <h3 className="modal-title">
                    {connections.some((c) => c.id === editingConn.id)
                      ? 'แก้ไขการเชื่อมต่อ MySQL'
                      : 'เพิ่มการเชื่อมต่อ MySQL ใหม่'}
                  </h3>
                  <p className="modal-subtitle">ตั้งค่า Host, Port, Credentials และเงื่อนไขการ Generate</p>
                </div>
              </div>
              <button className="icon-btn-close" onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="modal-form">
              <div className="form-grid">
                {/* Connection Name */}
                <div className="form-group col-span-2">
                  <label className="form-label">ชื่อการเชื่อมต่อ (Profile Name)</label>
                  <input
                    type="text"
                    className="ux-input"
                    value={editingConn.name}
                    onChange={(e) => setEditingConn({ ...editingConn, name: e.target.value })}
                    placeholder="เช่น HOSxP Production, GotoWin Backoffice"
                    required
                  />
                </div>

                {/* Host */}
                <div className="form-group">
                  <label className="form-label">DB Host / IP Address</label>
                  <input
                    type="text"
                    className="ux-input"
                    value={editingConn.host}
                    onChange={(e) => setEditingConn({ ...editingConn, host: e.target.value })}
                    placeholder="127.0.0.1 หรือ 192.168.x.x"
                    required
                  />
                </div>

                {/* Port */}
                <div className="form-group">
                  <label className="form-label">Port</label>
                  <input
                    type="number"
                    className="ux-input"
                    value={editingConn.port}
                    onChange={(e) => setEditingConn({ ...editingConn, port: Number(e.target.value) || 3306 })}
                    required
                  />
                </div>

                {/* Database */}
                <div className="form-group col-span-2">
                  <label className="form-label">Database Name</label>
                  <input
                    type="text"
                    className="ux-input"
                    value={editingConn.database}
                    onChange={(e) => {
                      const dbName = e.target.value;
                      setEditingConn({
                        ...editingConn,
                        database: dbName,
                        output_folder: editingConn.output_folder || dbName,
                      });
                    }}
                    placeholder="ชื่อฐานข้อมูลใน MySQL เช่น hos, hdbms"
                    required
                  />
                </div>

                {/* Username */}
                <div className="form-group">
                  <label className="form-label">Username (แนะนำ Read-only)</label>
                  <input
                    type="text"
                    className="ux-input"
                    value={editingConn.user}
                    onChange={(e) => setEditingConn({ ...editingConn, user: e.target.value })}
                    required
                  />
                </div>

                {/* Password */}
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <div className="input-with-icon">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="ux-input"
                      value={editingConn.password || ''}
                      onChange={(e) => setEditingConn({ ...editingConn, password: e.target.value })}
                    />
                    <button
                      type="button"
                      className="inner-input-btn"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Output Folder / Destination */}
                <div className="form-group col-span-2">
                  <div className="flex items-center justify-between mb-1">
                    <label className="form-label mb-0 flex items-center gap-1.5 font-semibold">
                      <Folder className="w-4 h-4 text-accent-2" />
                      <span>โฟลเดอร์ปลายทางสำหรับบันทึกไฟล์ (Destination Folder)</span>
                    </label>
                    {editingConn.output_folder && (
                      <button
                        type="button"
                        className="btn-text-link text-xs flex items-center gap-1"
                        onClick={() => setEditingConn({ ...editingConn, output_folder: '' })}
                        title="ล้างค่าเพื่อใช้โฟลเดอร์เริ่มต้นส่วนกลาง"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>รีเซ็ตเป็นค่าเริ่มต้นส่วนกลาง</span>
                      </button>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="ux-input flex-1 font-mono text-xs"
                      value={editingConn.output_folder}
                      onChange={(e) => setEditingConn({ ...editingConn, output_folder: e.target.value })}
                      placeholder={
                        defaultOutputDir
                          ? `ค่าเริ่มต้น: ${defaultOutputDir}\\${editingConn.database || 'db_name'}`
                          : `เช่น D:\\AI_Docs\\${editingConn.database || 'hosxp'} (เว้นว่างเพื่อใช้โฟลเดอร์เริ่มต้น)`
                      }
                    />
                    <button
                      type="button"
                      className="ux-btn-secondary"
                      onClick={async () => {
                        try {
                          const picked = await pickDestinationFolder();
                          if (picked) {
                            setEditingConn({ ...editingConn, output_folder: picked });
                          }
                        } catch (err) {
                          console.error('Pick folder error:', err);
                        }
                      }}
                      title="เปิดหน้าต่างเลือกโฟลเดอร์ในคอมพิวเตอร์"
                    >
                      <FolderSearch className="w-4 h-4 text-accent" />
                      <span>เลือกโฟลเดอร์...</span>
                    </button>
                    {editingConn.output_folder && (
                      <button
                        type="button"
                        className="ux-btn-secondary"
                        onClick={() => openInExplorer(editingConn.output_folder)}
                        title="เปิดโฟลเดอร์ใน Windows Explorer"
                      >
                        <FolderOpen className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-muted mt-1.5">
                    💡 สามารถกำหนดพาธเฉพาะสำหรับฐานข้อมูลนี้ เช่น <code>D:\AI_Context\hosxp</code> หรือกดปุ่ม <b>เลือกโฟลเดอร์...</b> เพื่อเลือกไดเรกทอรีใดก็ได้ในเครื่อง
                  </p>
                </div>

                {/* Sample Rows */}
                <div className="form-group">
                  <label className="form-label">จำนวน Sample Rows ต่อตาราง (5 - 20)</label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    className="ux-input"
                    value={editingConn.sample_rows}
                    onChange={(e) => setEditingConn({ ...editingConn, sample_rows: Number(e.target.value) || 8 })}
                  />
                </div>

                {/* Sample Max Chars */}
                <div className="form-group">
                  <label className="form-label">จำกัดอักขระต่อช่องข้อความ (Chars limit)</label>
                  <input
                    type="number"
                    min="50"
                    max="10000"
                    className="ux-input"
                    value={editingConn.sample_max_chars}
                    onChange={(e) => setEditingConn({ ...editingConn, sample_max_chars: Number(e.target.value) || 1000 })}
                  />
                </div>
              </div>

              {/* Test Connection Result Box */}
              {testResult && (
                <div className={`test-feedback-box ${testResult.ok ? 'success' : 'failed'}`}>
                  {testResult.ok ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0" />
                      <div className="test-feedback-info">
                        <strong>เชื่อมต่อสำเร็จ!</strong>
                        <span>MySQL Version: {testResult.version || 'N/A'} • ตารางทั้งหมด: {testResult.tables ?? 'N/A'} ตาราง ({testResult.latency}ms)</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 text-danger flex-shrink-0" />
                      <div className="test-feedback-info">
                        <strong>การเชื่อมต่อล้มเหลว:</strong>
                        <span>{testResult.msg}</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Table Selection Section */}
              <div className="table-filter-section">
                <div className="table-filter-header">
                  <div>
                    <span className="font-semibold text-sm">การกรองเฉพาะบางตาราง (Optional)</span>
                    <p className="text-xs text-muted">หากไม่เลือกจะทำการ generate ทุกตารางในฐานข้อมูล</p>
                  </div>
                  <button
                    type="button"
                    className="ux-btn-secondary btn-sm"
                    disabled={fetchingTables || !editingConn.database}
                    onClick={handleFetchTablesList}
                  >
                    {fetchingTables ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ListFilter className="w-3.5 h-3.5" />}
                    <span>ดึงรายชื่อตารางจาก DB</span>
                  </button>
                </div>

                {showTableSelector && availableTables.length > 0 && (
                  <div className="tables-pill-selector">
                    <div className="tables-summary-line">
                      <span>พบ {availableTables.length} ตาราง • เลือกแล้ว {editingConn.selected_tables?.length || 0} ตาราง</span>
                      <button
                        type="button"
                        className="btn-text-link text-xs"
                        onClick={() => setEditingConn({ ...editingConn, selected_tables: null })}
                      >
                        เลือกทุกตาราง
                      </button>
                    </div>
                    <div className="tables-chip-cloud">
                      {availableTables.map((tbl) => {
                        const isChecked = editingConn.selected_tables?.includes(tbl);
                        return (
                          <button
                            type="button"
                            key={tbl}
                            className={`table-chip ${isChecked ? 'active' : ''}`}
                            onClick={() => toggleTableSelection(tbl)}
                          >
                            {tbl}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Actions */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="ux-btn-secondary"
                  disabled={testing}
                  onClick={handleTestModalConn}
                >
                  {testing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Activity className="w-4 h-4" />}
                  <span>ทดสอบเชื่อมต่อ</span>
                </button>

                <div className="flex gap-2">
                  <button type="button" className="ux-btn-secondary" onClick={() => setIsModalOpen(false)}>
                    ยกเลิก
                  </button>
                  <button type="submit" className="ux-liquid-btn">
                    <span className="ux-sheen" />
                    <Save className="w-4 h-4" />
                    <span>บันทึกการเชื่อมต่อ</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
