import { useState, useEffect, useRef } from 'react';
import './RealTimeChat.css';

// Using localStorage to simulate socket event
const RealTimeChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const bottomRef = useRef(null);

  // Poll for simulated "real-time" updates (since we lack a real backend socket here)
  useEffect(() => {
    // Load initial history
    const history = JSON.parse(localStorage.getItem('chat_history') || '[]');
    setMessages(history);

    // Storage event listens when OTHER tabs update localStorage
    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem('chat_history') || '[]');
      setMessages(updated);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) setIsLoggedIn(true);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now(),
      user: username,
      text: inputText,
      timestamp: new Date().toLocaleTimeString(),
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem('chat_history', JSON.stringify(updatedMessages));

    // Manually dispatch event for current tab to update
    // (Note: 'storage' event usually only fires for OTHER tabs, so current tab needs manual update)
    setInputText('');
  };

  const handleClearChat = () => {
    setMessages([]);
    localStorage.removeItem('chat_history');
  };

  if (!isLoggedIn) {
    return (
      <div className="chat-login">
        <h2>Enter Username to Join Chat</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button type="submit">Join</button>
        </form>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>Room: Global</h3>
        <button onClick={handleClearChat} className="clear-chat-btn">
          Clear History
        </button>
      </div>

      <div className="chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-bubble ${
              msg.user === username ? 'my-message' : 'other-message'
            }`}
          >
            <div className="msg-meta">
              <span className="msg-user">{msg.user}</span>
              <span className="msg-time">{msg.timestamp}</span>
            </div>
            <div className="msg-text">{msg.text}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form className="chat-input-area" onSubmit={handleSend}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default RealTimeChat;
