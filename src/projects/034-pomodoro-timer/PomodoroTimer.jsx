import { useState, useEffect } from 'react';
import './PomodoroTimer.css';

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('work'); // 'work' or 'break'

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      // Optional: Play audio here
      setIsActive(false);
      alert(
        mode === 'work'
          ? 'Work session done! Take a break.'
          : 'Break over! Back to work.'
      );
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, mode]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === 'work' ? 25 * 60 : 5 * 60);
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setIsActive(false);
    setTimeLeft(newMode === 'work' ? 25 * 60 : 5 * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className={`pomodoro-container ${mode}`}>
      <h2>Pomodoro Timer</h2>

      <div className="mode-buttons">
        <button
          className={mode === 'work' ? 'active' : ''}
          onClick={() => switchMode('work')}
        >
          Work
        </button>
        <button
          className={mode === 'break' ? 'active' : ''}
          onClick={() => switchMode('break')}
        >
          Break
        </button>
      </div>

      <div className="timer-display">{formatTime(timeLeft)}</div>

      <div className="controls">
        <button className="main-btn" onClick={toggleTimer}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="reset-btn" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
