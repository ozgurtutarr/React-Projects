import { useState } from 'react';
import './SpreadsheetMini.css';

const ROWS = 10;
const COLS = 6; // A-F

const SpreadsheetMini = () => {
  // Generate Grid Data
  const initialData = {};
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const cellId = `${String.fromCharCode(65 + c)}${r + 1}`;
      initialData[cellId] = '';
    }
  }

  const [data, setData] = useState(initialData);
  const [selectedCell, setSelectedCell] = useState(null);

  const handleChange = (cellId, value) => {
    setData((prev) => ({ ...prev, [cellId]: value }));
  };

  // Basic formula evaluator (=A1+B1)
  const getCellValue = (cellId) => {
    const rawValue = data[cellId];
    if (rawValue && rawValue.startsWith('=')) {
      try {
        const expression = rawValue.substring(1).toUpperCase();
        // Replace regex cell references (e.g. A1) with actual values
        const parsedExpression = expression.replace(/[A-F][0-9]+/g, (match) => {
          const val = data[match];
          return isNaN(Number(val)) ? 0 : Number(val);
        });
        // eslint-disable-next-line no-eval
        return eval(parsedExpression);
      } catch (err) {
        return 'ERR';
      }
    }
    return rawValue; // Return raw text if not formula
  };

  return (
    <div className="spreadsheet-container">
      <h2>Mini Spreadsheet</h2>
      <p className="hint">
        Supports basic formulas like <code>=A1+B2</code> or <code>=C1*10</code>.
      </p>

      <div className="spreadsheet-grid">
        {/* Header Row (A, B, C...) */}
        <div className="row header-row">
          <div className="cell corner-cell"></div>
          {Array.from({ length: COLS }).map((_, i) => (
            <div key={i} className="cell header-cell">
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>

        {/* Rows */}
        {Array.from({ length: ROWS }).map((_, rowIdx) => (
          <div key={rowIdx} className="row">
            <div className="cell row-num-cell">{rowIdx + 1}</div>
            {Array.from({ length: COLS }).map((_, colIdx) => {
              const cellId = `${String.fromCharCode(65 + colIdx)}${rowIdx + 1}`;
              return (
                <input
                  key={cellId}
                  className={`cell input-cell ${
                    selectedCell === cellId ? 'active' : ''
                  }`}
                  value={
                    selectedCell === cellId
                      ? data[cellId]
                      : getCellValue(cellId)
                  }
                  onChange={(e) => handleChange(cellId, e.target.value)}
                  onFocus={() => setSelectedCell(cellId)}
                  onBlur={() => setSelectedCell(null)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpreadsheetMini;
