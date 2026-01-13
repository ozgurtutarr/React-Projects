import { useState } from 'react';
import './VideoCallInterface.css';

const VideoCallInterface = () => {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [isEnded, setIsEnded] = useState(false);

  // Mock streams
  const participants = [
    { id: 1, name: 'You', isMe: true },
    { id: 2, name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=68' },
    { id: 3, name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=47' },
    { id: 4, name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/150?img=12' },
  ];

  if (isEnded) {
    return (
      <div className="video-call-container ended">
        <h2>Call Ended</h2>
        <button className="join-btn" onClick={() => setIsEnded(false)}>
          Rejoin Call
        </button>
      </div>
    );
  }

  return (
    <div className="video-call-container">
      <div className="grid-layout">
        {participants.map((p) => (
          <div key={p.id} className="video-card">
            {p.isMe && !videoOn ? (
              <div className="avatar-placeholder">📷 Video Off</div>
            ) : (
              <div className="video-stream">
                {p.isMe ? (
                  <div className="my-placeholder">My Camera Feed</div>
                ) : (
                  <img
                    src={p.avatar}
                    alt={p.name}
                    className="participant-video"
                  />
                )}
              </div>
            )}
            <div className="participant-name">
              {p.name} {p.isMe && '(Me)'}
              {!micOn && p.isMe && ' 🔇'}
            </div>
          </div>
        ))}
      </div>

      <div className="call-controls">
        <button
          className={`control-btn ${!micOn ? 'off' : ''}`}
          onClick={() => setMicOn(!micOn)}
        >
          {micOn ? '🎙️' : '🔇'}
        </button>

        <button
          className="control-btn end-call"
          onClick={() => setIsEnded(true)}
        >
          📞
        </button>

        <button
          className={`control-btn ${!videoOn ? 'off' : ''}`}
          onClick={() => setVideoOn(!videoOn)}
        >
          {videoOn ? '📹' : '🚫'}
        </button>
      </div>
    </div>
  );
};

export default VideoCallInterface;
