import { useState, Suspense } from 'react';
import projects from './projectsConfig';
import Layout from './components/Layout/Layout';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const CurrentProjectData = projects.find((p) => p.id === currentProjectId);
  const CurrentComponent = CurrentProjectData
    ? CurrentProjectData.component
    : null;

  return (
    <ThemeProvider>
      <Layout
        projects={projects}
        currentProjectId={currentProjectId}
        onSelectProject={setCurrentProjectId}
      >
        {CurrentComponent ? (
          <div>
            <div className="back-btn-container">
              <button
                className="back-btn"
                onClick={() => setCurrentProjectId(null)}
              >
                ← Back to Overview
              </button>
            </div>
            <Suspense fallback={<div>Loading project...</div>}>
              <CurrentComponent
                {...(CurrentProjectData.props || {})}
                onLaunchProject={setCurrentProjectId}
              />
            </Suspense>
          </div>
        ) : (
          <div className="welcome-screen">
            <h1>Welcome to 100 React Projects</h1>
            <p>Select a project from the sidebar to view it.</p>
          </div>
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
