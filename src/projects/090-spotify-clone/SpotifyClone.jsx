import { useState, useRef } from 'react';
import './SpotifyClone.css';

// Mock Playlist
const PLAYLIST = [
  {
    id: 1,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    duration: '3:20',
    cover: 'https://via.placeholder.com/50?text=BL',
  },
  {
    id: 2,
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    duration: '3:53',
    cover: 'https://via.placeholder.com/50?text=SoY',
  },
  {
    id: 3,
    title: 'Levitation',
    artist: 'Dua Lipa',
    duration: '3:23',
    cover: 'https://via.placeholder.com/50?text=Lev',
  },
  {
    id: 4,
    title: 'Peaches',
    artist: 'Justin Bieber',
    duration: '3:18',
    cover: 'https://via.placeholder.com/50?text=Pea',
  },
  {
    id: 5,
    title: 'Montero',
    artist: 'Lil Nas X',
    duration: '2:17',
    cover: 'https://via.placeholder.com/50?text=Mon',
  },
];

const SpotifyClone = () => {
  const [currentTrack, setCurrentTrack] = useState(PLAYLIST[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulated audio logic (no actual audio file to avoid copyright/404, just progress bar logic)
  const intervalRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setProgress((p) => (p >= 100 ? 0 : p + 1));
      }, 300); // Fast mock progress
    }
    setIsPlaying(!isPlaying);
  };

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setProgress(0);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1));
    }, 300);
  };

  return (
    <div className="spotify-container">
      <div className="spotify-body">
        {/* Sidebar */}
        <nav className="spotify-sidebar">
          <div className="sidebar-logo">Spotify Clone</div>
          <ul className="sidebar-menu">
            <li className="active">🏠 Home</li>
            <li>🔍 Search</li>
            <li>📚 Your Library</li>
          </ul>
          <div className="sidebar-divider"></div>
          <ul className="sidebar-playlists">
            <li>➕ Create Playlist</li>
            <li>❤️ Liked Songs</li>
            <li>Chill Vibes</li>
            <li>Top 50 Global</li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="spotify-main">
          <header className="main-header">
            <div className="header-nav-btns">
              <button>{'<'}</button>
              <button>{'>'}</button>
            </div>
            <button className="user-pill">👤 User</button>
          </header>

          <div className="playlist-view">
            <div className="playlist-header">
              <img
                src={currentTrack.cover}
                alt="Cover"
                className="playlist-cover-lg"
              />
              <div className="playlist-info">
                <h4>PLAYLIST</h4>
                <h1>Top Hits 2024</h1>
                <p>The hottest tracks right now.</p>
              </div>
            </div>

            <div className="tracks-list">
              <div className="track-row-header">
                <span>#</span>
                <span>Title</span>
                <span>Album</span>
                <span>🕓</span>
              </div>
              {PLAYLIST.map((track, idx) => (
                <div
                  key={track.id}
                  className={`track-row ${
                    currentTrack.id === track.id ? 'current' : ''
                  }`}
                  onClick={() => playTrack(track)}
                >
                  <span>
                    {isPlaying && currentTrack.id === track.id ? '▶' : idx + 1}
                  </span>
                  <div className="track-title-col">
                    <img src={track.cover} alt="sm" />
                    <div>
                      <div className="t-name">{track.title}</div>
                      <div className="t-artist">{track.artist}</div>
                    </div>
                  </div>
                  <span>Top Hits Album</span>
                  <span>{track.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Player Bar */}
      <footer className="spotify-player">
        <div className="player-left">
          <img src={currentTrack.cover} alt="Cover" />
          <div>
            <div className="p-title">{currentTrack.title}</div>
            <div className="p-artist">{currentTrack.artist}</div>
          </div>
          <button className="like-btn">♡</button>
        </div>

        <div className="player-center">
          <div className="player-controls">
            <button>🔀</button>
            <button>⏮</button>
            <button className="play-circle" onClick={togglePlay}>
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button>⏭</button>
            <button>🔁</button>
          </div>
          <div className="progress-bar-area">
            <span>0:{(progress / 3).toFixed(0).padStart(2, '0')}</span>
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span>{currentTrack.duration}</span>
          </div>
        </div>

        <div className="player-right">
          <span>🎤</span>
          <span>🔊</span>
          <div className="vol-bar"></div>
        </div>
      </footer>
    </div>
  );
};

export default SpotifyClone;
