import { useState } from 'react';
import './PasswordGenerator.css';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (charset === '') {
      alert('Must select at least one option');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied!');
  };

  return (
    <div className="pg-container">
      <h2>Password Generator</h2>
      <div className="result-container">
        <span className="result-text">{password}</span>
        <button
          className="copy-btn"
          onClick={copyToClipboard}
          disabled={!password}
        >
          Copy
        </button>
      </div>

      <div className="settings">
        <div className="setting">
          <label>Password Length</label>
          <input
            type="number"
            min="4"
            max="30"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>
        <div className="setting">
          <label>Include Uppercase</label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
        </div>
        <div className="setting">
          <label>Include Lowercase</label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
        </div>
        <div className="setting">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
        </div>
        <div className="setting">
          <label>Include Symbols</label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
        </div>
      </div>

      <button className="generate-btn" onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
