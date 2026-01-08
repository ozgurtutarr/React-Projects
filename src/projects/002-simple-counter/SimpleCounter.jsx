import { useState } from 'react';

export default function SimpleCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Project 2: Simple Counter</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        <button onClick={() => setCount(count - 1)}>-</button>
        <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button onClick={() => setCount(0)} style={{ marginTop: '20px' }}>
        Reset
      </button>
    </div>
  );
}
