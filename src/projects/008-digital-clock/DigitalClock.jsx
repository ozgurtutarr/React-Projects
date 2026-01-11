import { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Digital Clock</h2>
      <div
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          fontFamily: 'monospace',
          padding: '20px',
          backgroundColor: '#333',
          color: '#0f0',
          borderRadius: '10px',
          display: 'inline-block',
          marginTop: '20px',
        }}
      >
        {time}
      </div>
    </div>
  );
};

export default DigitalClock;
