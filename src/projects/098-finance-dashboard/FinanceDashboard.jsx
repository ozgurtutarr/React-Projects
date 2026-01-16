import { useState } from 'react';
import './FinanceDashboard.css';

const FinanceDashboard = () => {
  // Mock Data
  const transactions = [
    {
      id: 1,
      desc: 'Grocery Store',
      date: 'Oct 24',
      amount: -150.0,
      type: 'expense',
    },
    {
      id: 2,
      desc: 'Salary Deposit',
      date: 'Oct 23',
      amount: 4500.0,
      type: 'income',
    },
    {
      id: 3,
      desc: 'Electric Bill',
      date: 'Oct 22',
      amount: -65.5,
      type: 'expense',
    },
    {
      id: 4,
      desc: 'Freelance Work',
      date: 'Oct 20',
      amount: 800.0,
      type: 'income',
    },
  ];

  return (
    <div className="finance-container">
      <aside className="fin-sidebar">
        <div className="fin-logo">BankDash</div>
        <nav className="fin-nav">
          <a href="#" className="active">
            Dashboard
          </a>
          <a href="#">Transactions</a>
          <a href="#">Cards</a>
          <a href="#">Investments</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      <main className="fin-main">
        <header className="fin-header">
          <h2>Overview</h2>
          <div className="user-profile-sm">User</div>
        </header>

        <div className="cards-row">
          <div className="stat-card balance">
            <h3>Total Balance</h3>
            <p className="big-amt">$12,450.00</p>
            <span className="trend positive">+2.5% vs last month</span>
          </div>
          <div className="stat-card income">
            <h3>Monthly Income</h3>
            <p className="amt">$5,300.00</p>
          </div>
          <div className="stat-card expenses">
            <h3>Monthly Expenses</h3>
            <p className="amt">$2,100.00</p>
          </div>
        </div>

        <div className="fin-grid-2">
          <div className="chart-panel">
            <h3>Spending Analytics</h3>
            {/* CSS-Only Bar Chart Mock */}
            <div className="chart-bars">
              <div className="bar-group">
                <div className="bar" style={{ height: '40%' }}></div>
                <span className="label">M</span>
              </div>
              <div className="bar-group">
                <div className="bar" style={{ height: '60%' }}></div>
                <span className="label">T</span>
              </div>
              <div className="bar-group">
                <div className="bar" style={{ height: '35%' }}></div>
                <span className="label">W</span>
              </div>
              <div className="bar-group">
                <div className="bar high" style={{ height: '80%' }}></div>
                <span className="label">T</span>
              </div>
              <div className="bar-group">
                <div className="bar" style={{ height: '50%' }}></div>
                <span className="label">F</span>
              </div>
              <div className="bar-group">
                <div className="bar low" style={{ height: '20%' }}></div>
                <span className="label">S</span>
              </div>
              <div className="bar-group">
                <div className="bar low" style={{ height: '30%' }}></div>
                <span className="label">S</span>
              </div>
            </div>
          </div>

          <div className="transactions-panel">
            <h3>Recent Transactions</h3>
            <div className="trans-list">
              {transactions.map((t) => (
                <div key={t.id} className="trans-item">
                  <div className={`icon-box ${t.type}`}>
                    {t.type === 'income' ? '↓' : '↑'}
                  </div>
                  <div className="trans-info">
                    <h4>{t.desc}</h4>
                    <span>{t.date}</span>
                  </div>
                  <span className={`trans-amt ${t.type}`}>
                    {t.type === 'income' ? '+' : ''}
                    {t.amount.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinanceDashboard;
