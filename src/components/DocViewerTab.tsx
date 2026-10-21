import React, { useState, useEffect } from 'react';
import {
  FileText,
  FolderOpen,
  Search,
  Copy,
  Check,
  RefreshCw,
  BookOpen,
  Folder,
} from 'lucide-react';
import { listOutputFiles, readDocFile, openInExplorer } from '../api';
import type { DbConnectionConfig } from '../types';

interface DocViewerTabProps {
  outputDir: string;
  connections?: DbConnectionConfig[];
}

export const DocViewerTab: React.FC<DocViewerTabProps> = ({ outputDir, connections = [] }) => {
  const [selectedFolder, setSelectedFolder] = useState<string>(outputDir);
  const [files, setFiles] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync selectedFolder if outputDir changes and nothing else was picked
  useEffect(() => {
    if (!selectedFolder) {
      setSelectedFolder(outputDir);
    }
  }, [outputDir]);

  const loadFileList = async (folderToScan = selectedFolder) => {
    if (!folderToScan) return;
    setLoading(true);
    try {
      const list = await listOutputFiles(folderToScan);
      setFiles(list);
      if (list.length > 0) {
        // default select README.md or first file if previous selection is not in list
        const readme = list.find((f) => f.toLowerCase().endsWith('readme.md'));
        handleSelectFile(readme || list[0]);
      } else {
        setSelectedFile(null);
        setContent('');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFileList(selectedFolder);
  }, [selectedFolder]);

  const handleSelectFile = async (filePath: string) => {
    setSelectedFile(filePath);
    try {
      const text = await readDocFile(filePath);
      setContent(text);
    } catch (err) {
      setContent(`ไม่สามารถอ่านไฟล์ได้: ${err}`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredFiles = files.filter((f) => {
    const filename = f.split(/[/\\]/).pop() || '';
    return filename.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const getFileBasename = (p: string) => p.split(/[/\\]/).pop() || p;
  const getSubfolder = (p: string) => {
    const parts = p.split(/[/\\]/);
    return parts.length >= 2 ? parts[parts.length - 2] : '';
  };

  return (
    <div className="tab-pane docs-viewer-tab">
      <div className="docs-layout">
        {/* Left Sidebar: File Tree */}
        <div className="docs-sidebar ux-glass-card">
          <div className="sidebar-header">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm">เอกสารที่สร้าง ({files.length} ไฟล์)</span>
              <button
                className="icon-btn-sm"
                onClick={() => loadFileList(selectedFolder)}
                title="รีเฟรชรายการไฟล์"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              </button>
            </div>

            {/* Database / Folder Dropdown */}
            {connections.length > 0 && (
              <div className="folder-selector-box mt-2">
                <label className="text-xs text-muted flex items-center gap-1 mb-1">
                  <Folder className="w-3 h-3 text-accent" />
                  <span>เลือกดูเอกสารของฐานข้อมูล:</span>
                </label>
                <select
                  className="ux-select text-xs w-full font-sans"
                  value={selectedFolder}
                  onChange={(e) => setSelectedFolder(e.target.value)}
                >
                  <option value={outputDir}>📂 [โฟลเดอร์หลัก] {outputDir}</option>
                  {connections.map((c) => {
                    const path = c.output_folder || `${outputDir}\\${c.database}`;
                    return (
                      <option key={c.id} value={path}>
                        📁 {c.name} ({path})
                      </option>
                    );
                  })}
                </select>
              </div>
            )}

            <div className="search-box mt-2">
              <Search className="w-3.5 h-3.5 text-muted" />
              <input
                type="text"
                className="search-input"
                placeholder="ค้นหาชื่อไฟล์หรือตาราง..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="sidebar-file-list">
            {filteredFiles.length === 0 ? (
              <div className="no-files-hint">
                <FileText className="w-8 h-8 text-muted" />
                <p>ไม่พบไฟล์ Markdown ในโฟลเดอร์นี้</p>
                <span className="text-xs text-muted font-mono">{selectedFolder}</span>
              </div>
            ) : (
              filteredFiles.map((file) => {
                const isSelected = selectedFile === file;
                const basename = getFileBasename(file);
                const subfolder = getSubfolder(file);

                return (
                  <button
                    key={file}
                    className={`file-item-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => handleSelectFile(file)}
                  >
                    <FileText className="w-4 h-4 file-icon" />
                    <div className="file-info">
                      <span className="file-name">{basename}</span>
                      {subfolder && <span className="file-subfolder">/{subfolder}</span>}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          <div className="sidebar-footer">
            <button
              className="ux-btn-secondary btn-sm w-full"
              onClick={() => openInExplorer(selectedFolder)}
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span>เปิดโฟลเดอร์นี้ใน Explorer</span>
            </button>
          </div>
        </div>

        {/* Right Main Viewer Pane */}
        <div className="docs-content-pane ux-glass-card">
          {selectedFile ? (
            <>
              <div className="doc-content-header">
                <div className="doc-meta-title">
                  <BookOpen className="w-4 h-4 text-accent" />
                  <span className="doc-title">{getFileBasename(selectedFile)}</span>
                  <span className="doc-path-badge">{selectedFile}</span>
                </div>

                <div className="doc-actions">
                  <button className="ux-btn-secondary btn-sm" onClick={handleCopy}>
                    {copied ? <Check className="w-3.5 h-3.5 text-mint" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'คัดลอกแล้ว' : 'คัดลอกเนื้อหา'}</span>
                  </button>
                </div>
              </div>

              <div className="doc-body-scroll">
                <pre className="markdown-code-block">
                  <code>{content}</code>
                </pre>
              </div>
            </>
          ) : (
            <div className="empty-viewer-state">
              <BookOpen className="w-12 h-12 text-muted" />
              <h3>เลือกไฟล์ทางด้านซ้ายเพื่อดูเนื้อหา</h3>
              <p className="text-muted text-sm">
                สามารถเปิดดู README, AI Context, Foreign Keys และเอกสารตารางทั้งหมดได้ที่นี่
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
