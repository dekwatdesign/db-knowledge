import React from 'react';
import { Database, Sparkles, Server, Settings, Sun, Moon, FileText } from 'lucide-react';

export type TabId = 'generate' | 'connections' | 'ai' | 'docs' | 'settings';

interface HeaderProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  connectionsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  theme,
  setTheme,
  connectionsCount,
}) => {
  const tabs = [
    { id: 'generate' as TabId, label: 'สร้าง Markdown', icon: Sparkles },
    { id: 'connections' as TabId, label: `ฐานข้อมูล (${connectionsCount})`, icon: Server },
    { id: 'ai' as TabId, label: 'AI Service', icon: Database },
    { id: 'docs' as TabId, label: 'ดูเอกสารที่สร้าง', icon: FileText },
    { id: 'settings' as TabId, label: 'ตั้งค่า', icon: Settings },
  ];

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  return (
    <header className="ux-header">
      <div className="header-brand">
        <div className="logo-icon-wrap">
          <Database className="w-5 h-5 text-accent" />
        </div>
        <div className="brand-titles">
          <div className="brand-main">
            <span className="brand-title">DB Knowledge</span>
            <span className="brand-badge">Windows App</span>
          </div>
          <span className="brand-sub">MySQL → LLM Markdown Context</span>
        </div>
      </div>

      <nav className="header-nav">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`nav-tab ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon className="w-4 h-4 tab-icon" />
              <span>{tab.label}</span>
              {isActive && <div className="nav-tab-active-indicator" />}
            </button>
          );
        })}
      </nav>

      <div className="header-actions">
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          title={theme === 'dark' ? 'เปลี่ยนเป็น Light mode' : 'เปลี่ยนเป็น Dark mode'}
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-warn" /> : <Moon className="w-4 h-4 text-accent" />}
          <span className="theme-toggle-text">{theme === 'dark' ? 'สว่าง' : 'มืด'}</span>
        </button>
      </div>
    </header>
  );
};
