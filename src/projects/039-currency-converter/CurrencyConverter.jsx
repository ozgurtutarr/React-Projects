import { useState, useEffect } from 'react';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(0.85);
  // Mock Rates relative to USD
  const rates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.0,
    TRY: 32.5, // approximate mock
  };

  useEffect(() => {
    // Calculate new rate
    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];
    const rate = toRate / fromRate;
    setExchangeRate(rate);
  }, [fromCurrency, toCurrency]);

  const convertedAmount = (amount * exchangeRate).toFixed(2);

  return (
    <div className="converter-container">
      <h2>Currency Converter</h2>

      <div className="converter-card">
        <div className="amount-input">
          <label>Amount</label>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="currency-selects">
          <div className="select-group">
            <label>From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {Object.keys(rates).map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>

          <div className="swap-icon">⇄</div>

          <div className="select-group">
            <label>To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {Object.keys(rates).map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="conversion-result">
          <p>
            {amount} {fromCurrency} =
          </p>
          <h3>
            {convertedAmount} {toCurrency}
          </h3>
          <p className="rate-info">
            1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
          </p>
        </div>
      </div>
      <p className="disclaimer">*Using mock exchange rates.</p>
    </div>
  );
};

export default CurrencyConverter;
