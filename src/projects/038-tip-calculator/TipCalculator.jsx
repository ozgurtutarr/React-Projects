import { useState } from 'react';
import './TipCalculator.css';

const TipCalculator = () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(1);

  const calculateTotal = () => {
    if (!bill) return { tipAmount: 0, total: 0, perPerson: 0 };

    const billNum = parseFloat(bill);
    const tipAmount = billNum * (tip / 100);
    const total = billNum + tipAmount;
    const perPerson = total / people;

    return {
      tipAmount: tipAmount.toFixed(2),
      total: total.toFixed(2),
      perPerson: perPerson.toFixed(2),
    };
  };

  const results = calculateTotal();

  return (
    <div className="tip-container">
      <h2>Tip Calculator</h2>

      <div className="tip-calculator">
        <div className="input-group">
          <label>Bill Amount ($)</label>
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            placeholder="0.00"
            min="0"
          />
        </div>

        <div className="input-group">
          <label>Tip Percentage: {tip}%</label>
          <input
            type="range"
            min="0"
            max="50"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Number of People: {people}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>

        <div className="results">
          <div className="result-row">
            <span>Tip Amount</span>
            <strong>${results.tipAmount}</strong>
          </div>
          <div className="result-row">
            <span>Total Bill</span>
            <strong>${results.total}</strong>
          </div>
          <div className="result-row highlight">
            <span>Per Person</span>
            <strong>${results.perPerson}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
