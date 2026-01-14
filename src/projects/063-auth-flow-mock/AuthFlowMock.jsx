import { useState, createContext, useContext } from 'react';
import './AuthFlowMock.css';

// 1. Auth Context
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser({ name: username, token: 'mock-jwt-token-123' });
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

// 2. Components
const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;
    setIsLoggingIn(true);
    await login(username);
    setIsLoggingIn(false);
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
      <p>Enter any username to mock login</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoggingIn}
        />
        <button type="submit" disabled={isLoggingIn}>
          {isLoggingIn ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

const ProtectedDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-mock">
      <div className="header">
        <h2>Welcome, {user.name}!</h2>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
      <div className="content">
        <p>This is a protected route. Only authenticated users can see this.</p>
        <div className="secret-data">
          <strong>Secret Token:</strong> {user.token}
        </div>
      </div>
    </div>
  );
};

// 3. Main Wrapper
const AuthFlowMock = () => {
  return (
    <AuthProvider>
      <div className="auth-flow-container">
        <AppContent />
      </div>
    </AuthProvider>
  );
};

// Separate component to use Context
const AppContent = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="nav-status">
        Status:{' '}
        <span className={user ? 'online' : 'offline'}>
          {user ? 'Authenticated' : 'Guest'}
        </span>
      </div>
      {user ? <ProtectedDashboard /> : <LoginPage />}
    </>
  );
};

export default AuthFlowMock;
