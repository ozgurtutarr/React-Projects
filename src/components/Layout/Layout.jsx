import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Layout.css';

const Layout = ({ projects, currentProjectId, onSelectProject, children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>React Projects</h3>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
        <ul className="sidebar-project-list">
          {projects.map((project) => (
            <li key={project.id} className="nav-item">
              <button
                className={`nav-btn ${currentProjectId === project.id ? 'active' : ''}`}
                onClick={() => onSelectProject(project.id)}
              >
                <span className="project-id-badge">#{project.id}</span>
                {project.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="main-content-wrapper">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
