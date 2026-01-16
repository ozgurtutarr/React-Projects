import { useState } from 'react';
import './DiscordClone.css';

const SERVERS = [
  { id: 1, name: 'React Developers', icon: 'R' },
  { id: 2, name: 'Gaming Lounge', icon: 'G' },
  { id: 3, name: 'Midjourney Art', icon: 'M' },
  { id: 4, name: 'Friends', icon: 'F' },
];

const CHANNELS = [
  { id: 1, name: 'general', type: 'text' },
  { id: 2, name: 'announcements', type: 'text' },
  { id: 3, name: 'off-topic', type: 'text' },
  { id: 4, name: 'Voice Lounge', type: 'voice' },
];

const MESSAGES = [
  {
    id: 1,
    user: 'wumpus',
    avatar: 'W',
    content: 'Welcome to the server!',
    time: 'Today at 12:00 PM',
  },
  {
    id: 2,
    user: 'neo',
    avatar: 'N',
    content: 'Does anyone know how to exit the matrix?',
    time: 'Today at 12:05 PM',
  },
  {
    id: 3,
    user: 'trinity',
    avatar: 'T',
    content: 'Follow the white rabbit.',
    time: 'Today at 12:06 PM',
  },
];

const DiscordClone = () => {
  const [activeServer, setActiveServer] = useState(1);
  const [activeChannel, setActiveChannel] = useState(1);

  return (
    <div className="discord-container">
      {/* 1. Server Sidebar */}
      <nav className="server-sidebar">
        <div className="server-icon discord-home">DS</div>
        <hr className="server-divider" />
        {SERVERS.map((server) => (
          <div
            key={server.id}
            className={`server-icon ${
              activeServer === server.id ? 'active' : ''
            }`}
            onClick={() => setActiveServer(server.id)}
          >
            {server.icon}
          </div>
        ))}
        <div className="server-icon add-server">+</div>
      </nav>

      {/* 2. Channels Sidebar */}
      <aside className="channel-sidebar">
        <header className="server-header">
          <h3>{SERVERS.find((s) => s.id === activeServer)?.name}</h3>
          <span>▼</span>
        </header>
        <div className="channel-list">
          <p className="category-label">TEXT CHANNELS</p>
          {CHANNELS.map((channel) => (
            <div
              key={channel.id}
              className={`channel-item ${
                activeChannel === channel.id ? 'active' : ''
              }`}
              onClick={() => setActiveChannel(channel.id)}
            >
              <span className="hash">#</span> {channel.name}
            </div>
          ))}
        </div>
        <div className="user-area-bottom">
          <div className="user-avatar">Me</div>
          <div className="user-info">
            <span className="name">User123</span>
            <span className="id">#9999</span>
          </div>
          <div className="mic-icons">🎙️ 🎧 ⚙️</div>
        </div>
      </aside>

      {/* 3. Main Chat Area */}
      <main className="chat-main">
        <header className="chat-header-top">
          <span className="hash">#</span>
          <h3>{CHANNELS.find((c) => c.id === activeChannel)?.name}</h3>
        </header>

        <div className="messages-list">
          {MESSAGES.map((msg) => (
            <div key={msg.id} className="discord-message">
              <div className="msg-avatar">{msg.avatar}</div>
              <div className="msg-content">
                <div className="msg-header">
                  <span className="msg-username">{msg.user}</span>
                  <span className="msg-time">{msg.time}</span>
                </div>
                <p className="msg-text">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="message-input-area">
          <div className="input-wrapper">
            <button className="add-file-btn">+</button>
            <input
              type="text"
              placeholder={`Message #${
                CHANNELS.find((c) => c.id === activeChannel)?.name
              }`}
            />
          </div>
        </div>
      </main>

      {/* 4. Members Sidebar */}
      <aside className="members-sidebar">
        <p className="category-label">ONLINE — 3</p>
        <div className="member-item">
          <div className="msg-avatar" style={{ background: '#ed4245' }}>
            W
          </div>
          <span className="member-name">wumpus</span>
        </div>
        <div className="member-item">
          <div className="msg-avatar" style={{ background: '#3ba55c' }}>
            N
          </div>
          <span className="member-name">neo</span>
        </div>
        <div className="member-item">
          <div className="msg-avatar" style={{ background: '#5865f2' }}>
            T
          </div>
          <span className="member-name">trinity</span>
        </div>
      </aside>
    </div>
  );
};

export default DiscordClone;
