import { useState } from 'react';
import './HexColorGenerator.css';

const HexColorGenerator = () => {
  const [color, setColor] = useState('#ffffff');

  const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  return (
    <div className="hex-container" style={{ backgroundColor: color }}>
      <div className="hex-card">
        <h2>Hex Color Generator</h2>
        <h1 className="color-text">{color}</h1>
        <div className="btn-group">
          <button onClick={generateColor}>Generate</button>
          <button onClick={copyToClipboard} className="copy-btn">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default HexColorGenerator;
