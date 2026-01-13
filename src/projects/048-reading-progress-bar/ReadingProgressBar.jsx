import { useState, useEffect } from 'react';
import './ReadingProgressBar.css';

const ReadingProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="rpb-container">
      <div className="progress-bar-wrapper">
        <div
          className="progress-bar"
          style={{ width: `${scrollWidth}%` }}
        ></div>
      </div>

      <div className="content">
        <h2>Reading Progress Bar</h2>
        <p className="hint">Scroll down to see the bar at the top fill up!</p>

        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Section{' '}
            {i + 1}.
          </p>
        ))}
      </div>
    </div>
  );
};

export default ReadingProgressBar;
