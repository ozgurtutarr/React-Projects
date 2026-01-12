import { useState } from 'react';
import './TemperatureControl.css';

const TemperatureControl = () => {
  const [temperatureValue, setTemperatureValue] = useState(20);
  const [temperatureColor, setTemperatureColor] = useState('hot');

  const increaseTemperature = () => {
    const newTemp = temperatureValue + 1;
    setTemperatureValue(newTemp);
    if (newTemp >= 15) {
      setTemperatureColor('hot');
    }
  };

  const decreaseTemperature = () => {
    const newTemp = temperatureValue - 1;
    setTemperatureValue(newTemp);
    if (newTemp < 15) {
      setTemperatureColor('cold');
    }
  };

  return (
    <div className="temp-control-container">
      <h2>Temperature Control</h2>
      <div className="card-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
        <div className="button-container">
          <button onClick={decreaseTemperature}>-</button>
          <button onClick={increaseTemperature}>+</button>
        </div>
      </div>
    </div>
  );
};

export default TemperatureControl;
