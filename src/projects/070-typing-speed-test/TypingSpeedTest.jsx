import { useState, useEffect, useRef } from 'react';
import './TypingSpeedTest.css';

const sampleText =
  'The quick brown fox jumps over the lazy dog. Programming is the art of telling another human what one wants the computer to do. React makes it painless to create interactive UIs.';

const TypingSpeedTest = () => {
  const [inputObj, setInputObj] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const inputRef = useRef(null);

  const calculateWPM = (text, timeElapsed) => {
    if (timeElapsed === 0) return 0;
    const words = text.trim().split(/\s+/).length;
    const minutes = timeElapsed / 60000;
    return Math.round(words / minutes);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    if (!startTime) setStartTime(Date.now());

    setInputObj(val);

    if (val === sampleText) {
      setIsFinished(true);
      const timeElapsed = Date.now() - startTime;
      setWpm(calculateWPM(val, timeElapsed));
    }
  };

  const resetGame = () => {
    setInputObj('');
    setStartTime(null);
    setWpm(0);
    setIsFinished(false);
    if (inputRef.current) inputRef.current.focus();
  };

  const renderText = () => {
    return sampleText.split('').map((char, index) => {
      let color = '';
      if (index < inputObj.length) {
        color = char === inputObj[index] ? 'correct-char' : 'incorrect-char';
      }
      return (
        <span key={index} className={color}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="typing-test-container">
      <h2>Typing Speed Test</h2>

      <div className="stats-board">
        <div className="stat">
          <span className="label">WPM</span>
          <span className="value">{isFinished ? wpm : '...'}</span>
        </div>
        <div className="stat">
          <span className="label">Status</span>
          <span className="value">
            {isFinished ? 'Finished!' : 'Typing...'}
          </span>
        </div>
      </div>

      <div className="text-display">{renderText()}</div>

      <textarea
        ref={inputRef}
        className="typing-input"
        value={inputObj}
        onChange={handleChange}
        disabled={isFinished}
        placeholder="Start typing the text above..."
      />

      <button className="reset-btn" onClick={resetGame}>
        Restart Test
      </button>
    </div>
  );
};

export default TypingSpeedTest;
