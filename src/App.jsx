import { useState } from 'react';
import HelloWorld from './projects/001-hello-world/HelloWorld';
import SimpleCounter from './projects/002-simple-counter/SimpleCounter';

function App() {
  const [currentProject, setCurrentProject] = useState(null);

  const renderProject = () => {
    switch (currentProject) {
      case 1:
        return <HelloWorld />;
      case 2:
        return <SimpleCounter />;
      default:
        return (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            Select a project from the menu
          </div>
        );
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '250px',
          background: '#f0f0f0',
          padding: '20px',
          borderRight: '1px solid #ddd',
        }}
      >
        <h3>React 100 Projects</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <button
              onClick={() => setCurrentProject(1)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '10px',
                marginBottom: '5px',
                cursor: 'pointer',
                background: currentProject === 1 ? '#ddd' : 'transparent',
                border: 'none',
              }}
            >
              1. Hello World
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentProject(2)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '10px',
                marginBottom: '5px',
                cursor: 'pointer',
                background: currentProject === 2 ? '#ddd' : 'transparent',
                border: 'none',
              }}
            >
              2. Simple Counter
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        {currentProject && (
          <button
            onClick={() => setCurrentProject(null)}
            style={{ marginBottom: '20px' }}
          >
            ← Back to Home
          </button>
        )}
        {renderProject()}
      </div>
    </div>
  );
}

export default App;
