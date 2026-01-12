import { useState } from 'react';
import './CharacterCounter.css';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  return (
    <div className="char-counter-container">
      <h2>Character Counter</h2>
      <textarea
        className="char-input"
        placeholder="Type something here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
      ></textarea>
      <div className="char-info">
        <p>
          Characters: <strong>{text.length}</strong>
        </p>
      </div>
    </div>
  );
};

export default CharacterCounter;
