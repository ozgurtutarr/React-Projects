import { useState } from 'react';
import './SidebarNavigation.css';

const SidebarNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      <h2>Sidebar Navigation</h2>
      <p>Click the hamburger icon to open the sidebar.</p>

      <button onClick={toggleSidebar} className="hamburger-btn">
        ☰
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button onClick={toggleSidebar} className="close-sidebar-btn">
          &times;
        </button>
        <ul className="sidebar-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default SidebarNavigation;
