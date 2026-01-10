import { useState, Suspense } from 'react';
import projects from './projectsConfig';

function App() {
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const CurrentProjectData = projects.find((p) => p.id === currentProjectId);
  const CurrentComponent = CurrentProjectData
    ? CurrentProjectData.component
    : null;

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '250px',
          background: '#f0f0f0',
          padding: '20px',
          borderRight: '1px solid #ddd',
          overflowY: 'auto',
          height: '100vh',
          position: 'sticky',
          top: 0,
        }}
      >
        <h3>React 100 Projects</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {projects.map((project) => (
            <li key={project.id}>
              <button
                onClick={() => setCurrentProjectId(project.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px',
                  marginBottom: '5px',
                  cursor: 'pointer',
                  background:
                    currentProjectId === project.id ? '#ddd' : 'transparent',
                  border: 'none',
                  borderRadius: '4px',
                }}
              >
                {project.id}. {project.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        {CurrentComponent ? (
          <div>
            <button
              onClick={() => setCurrentProjectId(null)}
              style={{ marginBottom: '20px' }}
            >
              ← Back to Home
            </button>
            <Suspense fallback={<div>Loading project...</div>}>
              <CurrentComponent {...(CurrentProjectData.props || {})} />
            </Suspense>
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Welcome to React 100 Projects!</h2>
            <p>Select a project from the sidebar to view it.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
