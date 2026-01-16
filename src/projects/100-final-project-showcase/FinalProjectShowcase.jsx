import { useState } from 'react';
// We are mimicking fetching the config, but in a real app we might import it.
// For this standalone component, we will rely on a mock list for the showcase to avoid circular dependency complex logic.
// However, since we are inside the app, we can just filter the IDs.
import './FinalProjectShowcase.css';

const FinalProjectShowcase = () => {
  // Generate 100 items mock for showcase
  const projects = Array.from({ length: 99 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    desc: `Description for project ${i + 1}`,
    color: `hsl(${Math.random() * 360}, 70%, 80%)`,
  }));

  const [search, setSearch] = useState('');

  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
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
          <div
            key={p.id}
            className="project-thumb"
            style={{ backgroundColor: p.color }}
          >
            <span className="p-id">#{p.id}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <button className="launch-btn">Launch 🚀</button>
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
