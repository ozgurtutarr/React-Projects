import { useState } from 'react';
import './AdminPanelCharts.css';

const AdminPanelCharts = () => {
  // Mock Data
  const tableData = [
    {
      id: 1,
      name: 'Product A',
      category: 'Elec',
      price: 99,
      stock: 45,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Product B',
      category: 'Cloth',
      price: 49,
      stock: 120,
      status: 'Active',
    },
    {
      id: 3,
      name: 'Product C',
      category: 'Home',
      price: 159,
      stock: 0,
      status: 'Out of Stock',
    },
    {
      id: 4,
      name: 'Product D',
      category: 'Elec',
      price: 299,
      stock: 12,
      status: 'Active',
    },
    {
      id: 5,
      name: 'Product E',
      category: 'Cloth',
      price: 29,
      stock: 200,
      status: 'Active',
    },
  ];

  const [filter, setFilter] = useState('All');

  const filteredData =
    filter === 'All' ? tableData : tableData.filter((d) => d.status === filter);

  return (
    <div className="admin-container">
      <nav className="admin-sidebar">
        <h3>AdminPro</h3>
        <ul>
          <li className="active">Dashboard</li>
          <li>Users</li>
          <li>Products</li>
          <li>Orders</li>
          <li>Settings</li>
        </ul>
      </nav>

      <main className="admin-content">
        <header className="admin-header">
          <h2>Dashboard / Overview</h2>
          <button className="logout-btn">Log Out</button>
        </header>

        <div className="kpi-grid">
          <div className="kpi-card pink">
            <h3>Total Sales</h3>
            <span>1,204</span>
            <div className="mini-chart">📈</div>
          </div>
          <div className="kpi-card blue">
            <h3>Active Users</h3>
            <span>32,100</span>
            <div className="mini-chart">👥</div>
          </div>
          <div className="kpi-card purple">
            <h3>New Orders</h3>
            <span>450</span>
            <div className="mini-chart">🛒</div>
          </div>
        </div>

        <div className="chart-section-mock">
          <div className="big-chart">
            <h3>Revenue (Yearly)</h3>
            <div className="mock-line-chart">
              <svg viewBox="0 0 500 150">
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  points="0,120 50,100 100,110 150,60 200,80 250,40 300,50 350,20 400,40 450,10 500,30"
                />
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
                <polyline
                  fill="url(#grad)"
                  stroke="none"
                  points="0,150 0,120 50,100 100,110 150,60 200,80 250,40 300,50 350,20 400,40 450,10 500,30 500,150"
                />
              </svg>
            </div>
          </div>
          <div className="pie-chart-mock">
            <h3>Device Usage</h3>
            <div className="pie-circle">
              <div
                className="slice"
                style={{ '--p': 60, '--c': '#3b82f6' }}
              ></div>
              <div className="center-dot">Mobile 60%</div>
            </div>
          </div>
        </div>

        <div className="data-table-section">
          <div className="dt-header">
            <h3>Latest Products</h3>
            <select onChange={(e) => setFilter(e.target.value)} value={filter}>
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row) => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.category}</td>
                  <td>${row.price}</td>
                  <td>{row.stock}</td>
                  <td>
                    <span
                      className={`badge ${
                        row.status === 'Active' ? 'success' : 'danger'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminPanelCharts;
