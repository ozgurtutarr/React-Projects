import { useState, createContext, useContext, useEffect } from 'react';
import './NotificationSystem.css';

// 1. Create Context
const NotificationContext = createContext();

// 2. Provider Component
const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications([...notifications, { id, message, type }]);

    // Auto remove after 3 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 3000);
  };

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div className="notification-container">
        {notifications.map((n) => (
          <div key={n.id} className={`notification toast ${n.type}`}>
            <span>{n.message}</span>
            <button
              onClick={() => removeNotification(n.id)}
              className="close-btn"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

// 3. Custom Hook
const useNotification = () => {
  return useContext(NotificationContext);
};

// 4. Consumer Component
const DemoComponent = () => {
  const { addNotification } = useNotification();

  return (
    <div className="demo-controls">
      <h3>Notification Demo</h3>
      <div className="btn-group">
        <button
          className="btn-success"
          onClick={() =>
            addNotification('Success! Operation completed.', 'success')
          }
        >
          Success
        </button>
        <button
          className="btn-error"
          onClick={() =>
            addNotification('Error! Something went wrong.', 'error')
          }
        >
          Error
        </button>
        <button
          className="btn-info"
          onClick={() => addNotification('Info: New update available.', 'info')}
        >
          Info
        </button>
        <button
          className="btn-warning"
          onClick={() =>
            addNotification('Warning: Check your connection.', 'warning')
          }
        >
          Warning
        </button>
      </div>
    </div>
  );
};

const NotificationSystem = () => {
  return (
    <NotificationProvider>
      <div className="ns-wrapper">
        <h2>Notification System (Context)</h2>
        <DemoComponent />
      </div>
    </NotificationProvider>
  );
};

export default NotificationSystem;
