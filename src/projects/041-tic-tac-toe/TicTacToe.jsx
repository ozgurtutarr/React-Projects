import { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const jumpToStart = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const status = winner
    ? `Winner: ${winner}`
    : board.every(Boolean)
    ? 'Draw!'
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="ttt-container">
      <h2>Tic-Tac-Toe</h2>
      <div className="status">{status}</div>

      <div className="board">
        {board.map((square, i) => (
          <button
            key={i}
            className={`square ${square === 'X' ? 'x-player' : 'o-player'}`}
            onClick={() => handleClick(i)}
          >
            {square}
          </button>
        ))}
      </div>

      <button className="reset-btn" onClick={jumpToStart}>
        Restart Game
      </button>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Cols
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
