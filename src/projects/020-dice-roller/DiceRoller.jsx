import { useState } from 'react';
import './DiceRoller.css';

const DiceRoller = () => {
  const [dice, setDice] = useState(1);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const newDice = Math.floor(Math.random() * 6) + 1;
      setDice(newDice);
      setRolling(false);
    }, 500); // 500ms rolling animation
  };

  const renderDiceFace = (value) => {
    switch (value) {
      case 1:
        return '\u2680';
      case 2:
        return '\u2681';
      case 3:
        return '\u2682';
      case 4:
        return '\u2683';
      case 5:
        return '\u2684';
      case 6:
        return '\u2685';
      default:
        return '\u2680';
    }
  };

  return (
    <div className="dice-container">
      <h2>Dice Roller</h2>
      <div className={`dice ${rolling ? 'rolling' : ''}`}>
        {renderDiceFace(dice)}
      </div>
      <button className="roll-btn" onClick={rollDice} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>
    </div>
  );
};

export default DiceRoller;
