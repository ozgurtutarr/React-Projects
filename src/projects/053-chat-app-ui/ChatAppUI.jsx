import { useState, useRef, useEffect } from 'react';
import './ChatAppUI.css';

const ChatAppUI = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hey there! How are you?',
      sender: 'other',
      timestamp: '10:00 AM',
    },
    {
      id: 2,
      text: 'I am doing good, thanks! How about you?',
      sender: 'me',
      timestamp: '10:01 AM',
    },
    {
      id: 3,
      text: 'Great! Working on some React projects.',
      sender: 'other',
      timestamp: '10:02 AM',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const msg = {
      id: Date.now(),
      text: newMessage,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages([...messages, msg]);
    setNewMessage('');

    // Simulate reply
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        text: 'That sounds awesome! Keep it up!',
        sender: 'other',
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1500);
  };

  return (
    <div className="chat-container">
      <h2>Chat App UI</h2>
      <div className="chat-window">
        <div className="chat-header">
          <div className="avatar">👤</div>
          <div>
            <h4>Jane Doe</h4>
            <span className="status">Online</span>
          </div>
        </div>

        <div className="chat-body">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              <div className="message-bubble">{msg.text}</div>
              <span className="timestamp">{msg.timestamp}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-footer" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">➤</button>
        </form>
      </div>
    </div>
  );
};

export default ChatAppUI;
