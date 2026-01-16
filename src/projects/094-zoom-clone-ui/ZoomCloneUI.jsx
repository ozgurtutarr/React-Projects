import { useState } from 'react';
import './ZoomCloneUI.css';

const ZoomCloneUI = () => {
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);

  // Mock participants
  const participants = [
    { id: 1, name: 'You', initial: 'Y', isMe: true },
    { id: 2, name: 'Alice', initial: 'A', isMe: false },
    { id: 3, name: 'Bob', initial: 'B', isMe: false },
    { id: 4, name: 'Charlie', initial: 'C', isMe: false },
  ];

  return (
    <div className="zoom-container">
      <div className="zoom-grid">
        {participants.map((p) => (
          <div key={p.id} className="video-tile">
            {p.isMe && !camOn ? (
              <div className="avatar-placeholder">{p.initial}</div>
            ) : !p.isMe ? (
              <div
                className="avatar-placeholder"
                style={{ backgroundColor: '#333' }}
              >
                {p.initial}
                <span className="mic-status-icon">🎤</span>
              </div>
            ) : (
              <div className="camera-on-mock" />
            )}

            <div className="name-tag">
              {p.name} {p.isMe && '(Me)'}
              {p.isMe && !micOn && <span className="muted-icon"> 🔴</span>}
            </div>
          </div>
        ))}
      </div>

      <footer className="zoom-controls">
        <div className="control-left">
          <button
            className={`control-btn ${!micOn ? 'danger' : ''}`}
            onClick={() => setMicOn(!micOn)}
          >
            <div className="icon-lg">{micOn ? '🎤' : '🔇'}</div>
            <span>{micOn ? 'Mute' : 'Unmute'}</span>
          </button>
          <button
            className={`control-btn ${!camOn ? 'danger' : ''}`}
            onClick={() => setCamOn(!camOn)}
          >
            <div className="icon-lg">{camOn ? '📹' : '🚫'}</div>
            <span>{camOn ? 'Stop Video' : 'Start Video'}</span>
          </button>
        </div>

        <div className="control-center">
          <button className="control-btn">
            <div className="icon-lg">👥</div>
            <span>Participants</span>
            <span className="badge">4</span>
          </button>
          <button className="control-btn">
            <div className="icon-lg">💬</div>
            <span>Chat</span>
          </button>
          <button className="control-btn success">
            <div className="icon-lg">⬆️</div>
            <span>Share Screen</span>
          </button>
          <button className="control-btn">
            <div className="icon-lg">😊</div>
            <span>Reactions</span>
          </button>
        </div>

        <div className="control-right">
          <button className="end-btn">End</button>
        </div>
      </footer>
    </div>
  );
};

export default ZoomCloneUI;
