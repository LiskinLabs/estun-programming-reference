import { useState, useMemo } from 'react';
import { Search, Book, Terminal, Globe, Radio, Settings2, Code, Zap, AlertTriangle } from 'lucide-react';
import './index.css';
import commandsDataRaw from './data/commands.json';
import examplesDataRaw from './data/examples.json';
import errorsDataRaw from './data/errors.json';

// Types
type Language = 'ru' | 'en' | 'tr';
type View = 'commands' | 'examples' | 'errors';

interface Parameter {
  name: string;
  type: string;
  desc_en: string;
  desc_ru: string;
  desc_tr: string;
}

interface Command {
  command: string;
  description: {
    ru: string;
    en: string;
    tr: string;
  };
  parameters: Parameter[];
}

interface Example {
  id: string;
  title: {
    ru: string;
    en: string;
    tr: string;
  };
  description: {
    ru: string;
    en: string;
    tr: string;
  };
  code: string;
}

// Convert JSON object format to strongly typed record
const commandsDB: Record<string, Command[]> = commandsDataRaw as any;
const examplesDB: Example[] = examplesDataRaw as any;
const errorsDB: any[] = errorsDataRaw as any;

const categories = Object.keys(commandsDB);

// Icon mapping for categories
const iconMap: Record<string, React.ReactNode> = {
  Movement: <Globe size={18} />,
  IO: <Radio size={18} />,
  Setting: <Settings2 size={18} />,
  Wait: <Zap size={18} />,
  Other: <Code size={18} />
};

function App() {
  const [currentView, setCurrentView] = useState<View>('commands');
  const [activeCategory, setActiveCategory] = useState<string>(Object.keys(commandsDB)[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [lang, setLang] = useState<Language>('ru');

  const categories = Object.keys(commandsDB);

  // Filter commands based on search across all categories or within active category
  const displayedCommands = useMemo(() => {
    if (!searchQuery) {
      return commandsDB[activeCategory] || [];
    }
    
    const query = searchQuery.toLowerCase();
    const results: Command[] = [];
    
    // Global search
    for (const cat of categories) {
      for (const cmd of commandsDB[cat]) {
        if (
          cmd.command.toLowerCase().includes(query) || 
          cmd.description[lang].toLowerCase().includes(query)
        ) {
          results.push(cmd);
        }
      }
    }
    return results;
  }, [activeCategory, searchQuery, lang, categories]);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <Terminal size={24} color="#3b82f6" />
          <h1>ESTUN Library</h1>
        </div>
        
        <div className="sidebar-nav">
          <div className="nav-group-title">VIEWS</div>
          
          <div 
            className={`nav-item ${currentView === 'commands' ? 'active' : ''}`}
            onClick={() => setCurrentView('commands')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Book size={18} />
              <span>{lang === 'ru' ? 'Справочник' : lang === 'en' ? 'Dictionary' : 'Kütüphane'}</span>
            </div>
          </div>
          
          <div 
            className={`nav-item ${currentView === 'examples' ? 'active' : ''}`}
            onClick={() => setCurrentView('examples')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={18} />
              <span>{lang === 'ru' ? 'Примеры' : lang === 'en' ? 'Examples' : 'Örnekler'}</span>
            </div>
          </div>

          <div 
            className={`nav-item ${currentView === 'errors' ? 'active' : ''}`}
            onClick={() => setCurrentView('errors')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={18} />
              <span>{lang === 'ru' ? 'Коды ошибок' : lang === 'en' ? 'Error Codes' : 'Hata Kodları'}</span>
            </div>
          </div>

          {currentView === 'commands' && (
            <>
              <div className="nav-group-title" style={{ marginTop: '20px' }}>CATEGORIES</div>
              {categories.map(cat => (
                <div 
                  key={cat}
                  className={`nav-item ${activeCategory === cat && !searchQuery ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSearchQuery('');
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {iconMap[cat] || <Book size={18} />}
                    <span>{cat}</span>
                  </div>
                  <span className="count-badge">{commandsDB[cat].length}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </aside>

      {/* Main Area */}
      <main className="main-content">
        <header className="topbar">
          <div className="search-container">
            <Search className="search-icon" size={18} />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search instructions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="lang-switch">
            <button className={`lang-btn ${lang === 'ru' ? 'active' : ''}`} onClick={() => setLang('ru')}>RU</button>
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
            <button className={`lang-btn ${lang === 'tr' ? 'active' : ''}`} onClick={() => setLang('tr')}>TR</button>
          </div>
        </header>

        <div className="content-scroll">
          {currentView === 'commands' ? (
            <>
              <div className="category-title">
                {searchQuery ? `Search Results for "${searchQuery}"` : activeCategory}
              </div>
              
              {displayedCommands.length === 0 ? (
                <div className="no-results">No instructions found.</div>
              ) : (
                <div className="cards-grid">
                  {displayedCommands.map((cmd, idx) => (
                    <div key={`${cmd.command}-${idx}`} className="cmd-card">
                      <div className="cmd-header">
                        <span className="cmd-name">{cmd.command}</span>
                      </div>
                      
                      <div className="cmd-desc">
                        {cmd.description[lang]}
                      </div>

                      {cmd.parameters && cmd.parameters.length > 0 && (
                        <>
                          <div className="params-title">Parameters</div>
                          <div className="param-list">
                            {cmd.parameters.map((p, i) => (
                              <div key={i} className="param-item">
                                <div className="param-header">
                                  <span className="param-name">{p.name}</span>
                                  <span className="param-type">{p.type}</span>
                                </div>
                                <div className="param-desc">
                                  {lang === 'ru' ? p.desc_ru : lang === 'en' ? p.desc_en : p.desc_tr}
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : currentView === 'examples' ? (
            <>
              <div className="category-title">
                {lang === 'ru' ? 'Примеры программ' : lang === 'en' ? 'Code Examples' : 'Kod Örnekleri'}
              </div>
              <div className="examples-grid">
                {examplesDB.map((ex) => (
                  <div key={ex.id} className="cmd-card">
                    <div className="cmd-header">
                      <span className="cmd-name" style={{ color: '#60a5fa' }}>{ex.title[lang]}</span>
                    </div>
                    <div className="cmd-desc">
                      {ex.description[lang]}
                    </div>
                    <div className="code-block">
                      <code>{ex.code}</code>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="category-title">
                {lang === 'ru' ? 'Системные ошибки (System Errors)' : lang === 'en' ? 'System Errors' : 'Sistem Hataları (System Errors)'}
                <span style={{ fontSize: '0.9rem', color: '#94a3b8', marginLeft: 'auto', fontWeight: 'normal' }}>
                  {errorsDB.length} Codes
                </span>
              </div>
              <div className="errors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))', gap: '16px' }}>
                {errorsDB.map((err, idx) => (
                  <div key={idx} className="cmd-card" style={{ padding: '16px' }}>
                    <div className="cmd-header" style={{ marginBottom: '8px' }}>
                      <span className="cmd-name" style={{ color: '#ef4444' }}>E{err.code}</span>
                    </div>
                    <div className="cmd-desc" style={{ marginBottom: '0' }}>
                      <div style={{ color: '#e2e8f0', marginBottom: '4px' }}>{err.en}</div>
                      {(lang === 'ru' || lang === 'tr') && (
                        <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{err.ch}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
