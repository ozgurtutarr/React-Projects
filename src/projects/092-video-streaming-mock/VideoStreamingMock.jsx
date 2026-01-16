import { useState, useRef } from 'react';
import './VideoStreamingMock.css';

const MOCK_VIDEOS = [
  {
    id: 1,
    title: 'Big Buck Bunny',
    thumbnail: 'https://via.placeholder.com/320x180?text=Bunny',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    views: '1M',
    author: 'Blender',
  },
  {
    id: 2,
    title: 'Elephant Dream',
    thumbnail: 'https://via.placeholder.com/320x180?text=Elephant',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    views: '500k',
    author: 'Blender',
  },
];

const VideoStreamingMock = () => {
  const [currentVideo, setCurrentVideo] = useState(MOCK_VIDEOS[0]);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-app-container">
      <header className="video-header">
        <div className="logo-yt">StreamTube</div>
        <input type="text" placeholder="Search" className="search-input" />
        <div className="user-icon">U</div>
      </header>

      <div className="video-layout">
        <main className="main-player">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              src={currentVideo.src}
              poster={currentVideo.thumbnail}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls
            />
          </div>
          <div className="video-info">
            <h2>{currentVideo.title}</h2>
            <div className="stats-row">
              <span>{currentVideo.views} views</span>
              <div className="actions">
                <button>👍 Like</button>
                <button>👎 Dislike</button>
                <button>Share</button>
              </div>
            </div>
            <hr />
            <div className="channel-row">
              <div className="channel-icon">B</div>
              <div className="channel-details">
                <h4>{currentVideo.author}</h4>
                <span>100K subscribers</span>
              </div>
              <button className="sub-btn">Subscribe</button>
            </div>
            <p className="desc">
              This is a sample video description for {currentVideo.title}. It
              demonstrates the video player capability.
            </p>
          </div>

          <div className="comments-section">
            <h3>Comments</h3>
            <div className="comment">
              <div className="comment-user">User A</div>
              <p>Great video!</p>
            </div>
            <div className="comment">
              <div className="comment-user">User B</div>
              <p>Awesome animation.</p>
            </div>
          </div>
        </main>

        <aside className="recommendations">
          {MOCK_VIDEOS.map((vid) => (
            <div
              key={vid.id}
              className="rec-card"
              onClick={() => {
                setCurrentVideo(vid);
                setIsPlaying(false);
              }}
            >
              <img src={vid.thumbnail} alt="thumb" />
              <div className="rec-info">
                <h4>{vid.title}</h4>
                <span>{vid.author}</span>
                <span>{vid.views} views</span>
              </div>
            </div>
          ))}
          {/* Filling with dummies for visual look */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={'dummy' + i} className="rec-card">
              <div className="dummy-thumb"></div>
              <div className="rec-info">
                <h4>Recommended Video {i}</h4>
                <span>Channel Name</span>
                <span>{i}0K views</span>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default VideoStreamingMock;
