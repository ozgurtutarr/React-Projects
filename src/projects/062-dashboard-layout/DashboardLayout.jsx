import { useState } from 'react';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Overview');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navItems = [
    { icon: '📊', label: 'Overview' },
    { icon: '👥', label: 'Users' },
    { icon: '🛒', label: 'Orders' },
    { icon: '⚙️', label: 'Settings' },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          {sidebarOpen && <h3>AdminPanel</h3>}
          <button className="toggle-btn" onClick={toggleSidebar}>
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`nav-item ${activeTab === item.label ? 'active' : ''}`}
              onClick={() => setActiveTab(item.label)}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h2>{activeTab}</h2>
          <div className="user-profile">
            <span>Admin User</span>
            <div className="avatar">AD</div>
          </div>
        </header>

        <div className="dashboard-content">
          <div
            className={`tab-content ${
              activeTab === 'Overview' ? 'active' : ''
            }`}
          >
            <div className="stats-grid">
              <div className="stat-card">
                <h4>Total Users</h4>
                <p className="stat-value">1,245</p>
                <span className="stat-change positive">+12%</span>
              </div>
              <div className="stat-card">
                <h4>Total Sales</h4>
                <p className="stat-value">$34,500</p>
                <span className="stat-change positive">+8%</span>
              </div>
              <div className="stat-card">
                <h4>Pending Orders</h4>
                <p className="stat-value">45</p>
                <span className="stat-change negative">-2%</span>
              </div>
            </div>
            <div className="chart-placeholder">
              <p>Chart Area (Mock)</p>
              <div className="bars">
                <div style={{ height: '60%' }}></div>
                <div style={{ height: '80%' }}></div>
                <div style={{ height: '40%' }}></div>
                <div style={{ height: '90%' }}></div>
                <div style={{ height: '70%' }}></div>
              </div>
            </div>
          </div>

          <div
            className={`tab-content ${activeTab === 'Users' ? 'active' : ''}`}
          >
            <h3>User Management</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>Admin</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Smith</td>
                  <td>Editor</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Bob Wilson</td>
                  <td>Viewer</td>
                  <td>Inactive</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className={`tab-content ${activeTab === 'Orders' ? 'active' : ''}`}
          >
            <h3>Recent Orders</h3>
            <p>Order list goes here...</p>
          </div>

          <div
            className={`tab-content ${
              activeTab === 'Settings' ? 'active' : ''
            }`}
          >
            <h3>Settings</h3>
            <form className="settings-form">
              <label>
                Site Name: <input type="text" defaultValue="My Dashboard" />
              </label>
              <label>
                Theme:
                <select>
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </label>
              <button type="button">Save Changes</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
