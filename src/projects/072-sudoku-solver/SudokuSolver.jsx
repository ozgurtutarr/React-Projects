import { useState } from 'react';
import './SudokuSolver.css';

const SudokuSolver = () => {
  const initialGrid = Array(9)
    .fill()
    .map(() => Array(9).fill(''));
  const [grid, setGrid] = useState(initialGrid);
  const [status, setStatus] = useState('');

  const handleChange = (row, col, value) => {
    // validation: digits 1-9 or empty
    if (!/^[1-9]?$/.test(value)) return;

    const newGrid = grid.map((r) => [...r]);
    newGrid[row][col] = value === '' ? '' : parseInt(value);
    setGrid(newGrid);
  };

  const solve = () => {
    const board = grid.map((row) =>
      row.map((cell) => (cell === '' ? 0 : cell))
    );
    if (solveSudoku(board)) {
      setGrid(board);
      setStatus('Solved!');
    } else {
      setStatus('Unsolvable puzzle.');
    }
  };

  const clear = () => {
    setGrid(initialGrid);
    setStatus('');
  };

  // Backtracking Algorithm
  const solveSudoku = (board) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num;
              if (solveSudoku(board)) return true;
              board[row][col] = 0; // backtrack
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  const isValid = (board, row, col, num) => {
    for (let x = 0; x < 9; x++) {
      // check row & col
      if (board[row][x] === num || board[x][col] === num) return false;
      // check 3x3 box
      const startRow = 3 * Math.floor(row / 3);
      const startCol = 3 * Math.floor(col / 3);
      if (board[startRow + Math.floor(x / 3)][startCol + (x % 3)] === num)
        return false;
    }
    return true;
  };

  return (
    <div className="sudoku-container">
      <h2>Sudoku Solver</h2>
      <p>Enter numbers and click Solve (Backtracking Algorithm).</p>

      <div className="sudoku-grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="sudoku-row">
            {row.map((cell, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="text"
                value={cell}
                maxLength="1"
                onChange={(e) =>
                  handleChange(rowIndex, colIndex, e.target.value)
                }
                className={`sudoku-cell ${
                  (rowIndex + 1) % 3 === 0 && rowIndex !== 8
                    ? 'border-bottom'
                    : ''
                } ${
                  (colIndex + 1) % 3 === 0 && colIndex !== 8
                    ? 'border-right'
                    : ''
                }`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="actions">
        <button onClick={solve} className="solve-btn">
          Solve
        </button>
        <button onClick={clear} className="clear-btn">
          Clear
        </button>
      </div>
      {status && <p className="status-msg">{status}</p>}
    </div>
  );
};

export default SudokuSolver;
