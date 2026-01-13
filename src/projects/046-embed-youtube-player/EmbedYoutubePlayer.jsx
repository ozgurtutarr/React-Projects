import { useState } from 'react';
import './EmbedYoutubePlayer.css';

const EmbedYoutubePlayer = () => {
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState(null);

  const extractVideoId = (inputUrl) => {
    // Basic regex for YouTube URLs
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = inputUrl.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handleEmbed = (e) => {
    e.preventDefault();
    const id = extractVideoId(url);
    if (id) {
      setVideoId(id);
    } else {
      alert('Invalid YouTube URL');
      setVideoId(null);
    }
  };

  return (
    <div className="youtube-container">
      <h2>Embed YouTube Player</h2>
      <form onSubmit={handleEmbed} className="url-form">
        <input
          type="text"
          placeholder="Paste YouTube Link (e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Embed</button>
      </form>

      {videoId ? (
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      ) : (
        <div className="placeholder">
          <p>No video embedded yet.</p>
        </div>
      )}
    </div>
  );
};

export default EmbedYoutubePlayer;
