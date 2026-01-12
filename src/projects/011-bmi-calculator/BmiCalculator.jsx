import { useState } from 'react';
import './BmiCalculator.css';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBmi = () => {
    if (!height || !weight) {
      alert('Please enter both height and weight');
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setStatus('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setStatus('Normal Weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setStatus('Overweight');
    } else {
      setStatus('Obese');
    }
  };

  const resetCalculator = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setStatus('');
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="e.g. 175"
        />
      </div>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="e.g. 70"
        />
      </div>
      <div className="button-group">
        <button onClick={calculateBmi}>Calculate</button>
        <button className="reset-btn" onClick={resetCalculator}>
          Reset
        </button>
      </div>
      {bmi && (
        <div className="result-container">
          <p>
            Your BMI: <strong>{bmi}</strong>
          </p>
          <p>
            Status:{' '}
            <span
              className={`status ${status.toLowerCase().replace(' ', '-')}`}
            >
              {status}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
