import { useState, useEffect } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = ('0' + Math.floor((time / 60000) % 60)).slice(-2);
    const seconds = ('0' + Math.floor((time / 1000) % 60)).slice(-2);
    const milliseconds = ('0' + ((time / 10) % 100)).slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="stopwatch-container">
      <h2>Stopwatch</h2>
      <div className="stopwatch-display">
        <span>{formatTime(time)}</span>
      </div>
      <div className="stopwatch-buttons">
        {!running && time === 0 && <button onClick={handleStart}>Start</button>}
        {running && <button onClick={handleStop}>Stop</button>}
        {!running && time > 0 && <button onClick={handleStart}>Resume</button>}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
