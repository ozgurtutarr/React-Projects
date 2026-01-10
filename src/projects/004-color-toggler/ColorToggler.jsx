import { useState } from 'react';
import './ColorToggler.css';

const ColorToggler = () => {
  const [backgroundColor, setBackgroundColor] = useState('#2c3e50');

  const colors = [
    '#2c3e50', // Midnight Blue
    '#e74c3c', // Alizarin Red
    '#f1c40f', // Sunflower Yellow
    '#8e44ad', // Wisteria Purple
    '#2ecc71', // Emerald Green
    '#e67e22', // Carrot Orange
    '#1abc9c', // Turquoise
    '#34495e', // Wet Asphalt
  ];

  const changeColor = () => {
    // Get a random color different from current
    let newColor = backgroundColor;
    while (newColor === backgroundColor) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    setBackgroundColor(newColor);
  };

  return (
    <div className="color-toggler-container" style={{ backgroundColor }}>
      <h2>Background Color: {backgroundColor}</h2>
      <button className="color-toggler-btn" onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default ColorToggler;
