import { useState } from 'react';
import projects from '../../projectsConfig';
import './FinalProjectShowcase.css';

const FinalProjectShowcase = ({ onLaunchProject }) => {
  const [search, setSearch] = useState('');

  const filtered = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="showcase-container">
      <header className="showcase-hero">
        <h1>🎉 100 React Projects Journey 🎉</h1>
        <p>From "Hello World" to "Complex Dashboards"</p>
        <div className="showcase-search">
          <input
            type="text"
            placeholder="Find a project..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <div className="showcase-grid">
        {filtered.map((p) => (
          <div key={p.id} className="project-thumb">
            <span className="p-id">#{p.id}</span>
            <h3>{p.name}</h3>
            <p>Click to launch this project</p>
            <button
              className="launch-btn"
              onClick={() => onLaunchProject && onLaunchProject(p.id)}
            >
              Launch 🚀
            </button>
          </div>
        ))}
      </div>

      <footer className="showcase-footer">
        <p>Completed by Ozgur Tutar • 2026</p>
        <p>100/100 Projects Completed</p>
      </footer>
    </div>
  );
};

export default FinalProjectShowcase;
