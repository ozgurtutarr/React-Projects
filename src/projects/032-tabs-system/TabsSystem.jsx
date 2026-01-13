import { useState } from 'react';
import './TabsSystem.css';

const TabsSystem = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Home',
      content: 'Welcome to the Home tab. This is the main content area.',
    },
    {
      title: 'Profile',
      content: 'This is the Profile tab. User information goes here.',
    },
    {
      title: 'Settings',
      content: 'Settings tab. Adjust your preferences here.',
    },
    { title: 'Contact', content: 'Contact us at example@email.com.' },
  ];

  return (
    <div className="tabs-container">
      <h2>Tabs System</h2>

      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <div className="tab-pane fade-in">
          <h3>{tabs[activeTab].title}</h3>
          <p>{tabs[activeTab].content}</p>
        </div>
      </div>
    </div>
  );
};

export default TabsSystem;
