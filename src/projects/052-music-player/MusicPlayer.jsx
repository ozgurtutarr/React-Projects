import { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);

  const playlist = [
    {
      title: 'Cinematic Ambient',
      artist: 'Music by Lexin_Music',
      src: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=cinematic-ambient-115324.mp3',
    },
    {
      title: 'Forest Lullaby',
      artist: 'Music by Lesfm',
      src: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=forest-lullaby-110624.mp3',
    },
  ];

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, trackIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleProgressChange = () => {
    const newTime = Number(progressBarRef.current.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const nextTrack = () => {
    setTrackIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  return (
    <div className="music-player-container">
      <h2>Music Player</h2>
      <div className="player-card">
        <div className="album-art">🎵</div>
        <div className="track-info">
          <h3>{playlist[trackIndex].title}</h3>
          <p>{playlist[trackIndex].artist}</p>
        </div>

        <audio
          ref={audioRef}
          src={playlist[trackIndex].src}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={nextTrack}
        />

        <div className="progress-container">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            ref={progressBarRef}
            value={currentTime}
            max={duration || 0}
            onChange={handleProgressChange}
            className="progress-bar"
          />
          <span>{formatTime(duration)}</span>
        </div>

        <div className="controls">
          <button onClick={prevTrack}>⏮</button>
          <button onClick={togglePlay} className="play-btn">
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button onClick={nextTrack}>⏭</button>
        </div>
      </div>
      <p className="disclaimer">Music from Pixabay (Royalty Free)</p>
    </div>
  );
};

export default MusicPlayer;
