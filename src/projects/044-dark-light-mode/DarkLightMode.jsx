import { useState, createContext, useContext } from 'react';
import './DarkLightMode.css';

// Context creation
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-wrapper ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

const Content = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-card">
      <h1>{theme === 'light' ? 'Light Mode ☀️' : 'Dark Mode 🌙'}</h1>
      <p>This component uses React Context to manage theme state.</p>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Switch to {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
};

const DarkLightMode = () => {
  return (
    <div className="dl-container">
      <h2>Dark/Light Mode</h2>
      <ThemeProvider>
        <Content />
      </ThemeProvider>
    </div>
  );
};

export default DarkLightMode;
