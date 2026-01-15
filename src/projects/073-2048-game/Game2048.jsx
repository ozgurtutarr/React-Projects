import { useState, useEffect } from 'react';
import './Game2048.css';

const Game2048 = () => {
  const [board, setBoard] = useState(getEmptyBoard());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Initialize
  useEffect(() => {
    initializeGame();
  }, []);

  // Keyboard Event
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameOver) return;

      switch (event.key) {
        case 'ArrowUp':
          moveUp();
          break;
        case 'ArrowDown':
          moveDown();
          break;
        case 'ArrowLeft':
          moveLeft();
          break;
        case 'ArrowRight':
          moveRight();
          break;
        default:
          return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [board, gameOver]);

  function getEmptyBoard() {
    return [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
  }

  function initializeGame() {
    let newBoard = getEmptyBoard();
    addRandomTile(newBoard);
    addRandomTile(newBoard);
    setBoard(newBoard);
    setScore(0);
    setGameOver(false);
  }

  function addRandomTile(board) {
    const emptyTiles = [];
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c] === 0) emptyTiles.push({ r, c });
      }
    }
    if (emptyTiles.length === 0) return;
    const { r, c } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    board[r][c] = Math.random() < 0.9 ? 2 : 4;
  }

  // LOGIC: Slide & Merge
  // To keep it simple, we transpose/reverse board to simulate all directions with just `slideLeft` logic

  const moveLeft = () => {
    const [newBoard, points] = slide(board);
    updateBoard(newBoard, points);
  };

  const moveRight = () => {
    let newBoard = reverse(board);
    const [slidBoard, points] = slide(newBoard);
    newBoard = reverse(slidBoard);
    updateBoard(newBoard, points);
  };

  const moveUp = () => {
    let newBoard = transpose(board);
    const [slidBoard, points] = slide(newBoard);
    newBoard = transpose(slidBoard);
    updateBoard(newBoard, points);
  };

  const moveDown = () => {
    let newBoard = transpose(board);
    newBoard = reverse(newBoard);
    const [slidBoard, points] = slide(newBoard);
    newBoard = reverse(slidBoard);
    newBoard = transpose(newBoard);
    updateBoard(newBoard, points);
  };

  function updateBoard(newBoard, points) {
    if (JSON.stringify(newBoard) !== JSON.stringify(board)) {
      addRandomTile(newBoard);
      setBoard(newBoard);
      setScore(score + points);
      if (checkGameOver(newBoard)) setGameOver(true);
    }
  }

  function slide(currentBoard) {
    let newBoard = currentBoard.map((row) => {
      // 1. Remove zeros
      let arr = row.filter((val) => val !== 0);
      let points = 0;
      // 2. Merge
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
          arr[i] *= 2;
          arr[i + 1] = 0;
          points += arr[i];
        }
      }
      arr = arr.filter((val) => val !== 0); // Remove zeros again
      // 3. Add zeros back
      while (arr.length < 4) {
        arr.push(0);
      }
      return { arr, points };
    });

    const boardResult = newBoard.map((obj) => obj.arr);
    const pointsResult = newBoard.reduce((acc, obj) => acc + obj.points, 0);
    return [boardResult, pointsResult];
  }

  function checkGameOver(board) {
    // Check for zeros
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c] === 0) return false;
      }
    }
    // Check for merges
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (c < 3 && board[r][c] === board[r][c + 1]) return false;
        if (r < 3 && board[r][c] === board[r + 1][c]) return false;
      }
    }
    return true;
  }

  // Helpers
  const reverse = (b) => b.map((row) => [...row].reverse());
  const transpose = (b) => b[0].map((_, c) => b.map((r) => r[c]));

  return (
    <div className="game-2048-container">
      <h2>2048 Game</h2>
      <p>
        Use Arrow Keys to join the numbers and get to the <strong>2048</strong>{' '}
        tile!
      </p>

      <div className="game-header">
        <div className="score-box">Score: {score}</div>
        <button className="restart-btn" onClick={initializeGame}>
          New Game
        </button>
      </div>

      <div className="game-board">
        {board.flat().map((tile, index) => (
          <div key={index} className={`tile tile-${tile}`}>
            {tile !== 0 ? tile : ''}
          </div>
        ))}
        {gameOver && (
          <div className="game-over-overlay">
            <h3>Game Over!</h3>
            <button onClick={initializeGame}>Try Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game2048;
