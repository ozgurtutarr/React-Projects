import { useState, useEffect } from 'react';
import './PathfindingVisualizer.css';

// 20x20 Grid
const ROWS = 20;
const COLS = 20;
const START_NODE = { row: 2, col: 2 };
const END_NODE = { row: 17, col: 17 };

const PathfindingVisualizer = () => {
  const [grid, setGrid] = useState([]);
  const [isVisualizing, setIsVisualizing] = useState(false);

  useEffect(() => {
    resetGrid();
  }, []);

  const resetGrid = () => {
    const newGrid = [];
    for (let row = 0; row < ROWS; row++) {
      const currentRow = [];
      for (let col = 0; col < COLS; col++) {
        currentRow.push({
          row,
          col,
          isStart: row === START_NODE.row && col === START_NODE.col,
          isEnd: row === END_NODE.row && col === END_NODE.col,
          isWall: false,
          isVisited: false,
          isPath: false,
          distance: Infinity,
          previousNode: null,
        });
      }
      newGrid.push(currentRow);
    }
    setGrid(newGrid);
  };

  const toggleWall = (row, col) => {
    if (isVisualizing) return;
    const newGrid = [...grid];
    const node = newGrid[row][col];
    if (!node.isStart && !node.isEnd) {
      node.isWall = !node.isWall;
      setGrid(newGrid);
    }
  };

  const visualizeDijkstra = async () => {
    if (isVisualizing) return;
    setIsVisualizing(true);

    const start = grid[START_NODE.row][START_NODE.col];
    const end = grid[END_NODE.row][END_NODE.col];
    const unvisitedNodes = getAllNodes(grid);
    start.distance = 0;

    while (unvisitedNodes.length) {
      sortNodesByDistance(unvisitedNodes);
      const closestNode = unvisitedNodes.shift();

      // If wall, skip
      if (closestNode.isWall) continue;

      // If trapped
      if (closestNode.distance === Infinity) break;

      closestNode.isVisited = true;
      await sleep(10);
      updateGrid(); // Trigger re-render to show visited

      if (closestNode === end) {
        await animatePath(end);
        setIsVisualizing(false);
        return;
      }

      updateUnvisitedNeighbors(closestNode, grid);
    }
    setIsVisualizing(false);
  };

  const animatePath = async (endNode) => {
    let currentNode = endNode;
    while (currentNode !== null) {
      currentNode.isPath = true;
      currentNode = currentNode.previousNode;
      await sleep(30);
      updateGrid();
    }
  };

  const updateGrid = () => {
    setGrid((prev) => [...prev]);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Dijkstra Helpers
  function sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
  }

  function updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
    }
  }

  function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < ROWS - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < COLS - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter((neighbor) => !neighbor.isVisited);
  }

  function getAllNodes(grid) {
    const nodes = [];
    for (const row of grid) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
  }

  return (
    <div className="pathfinding-container">
      <h2>Pathfinding Visualizer (Dijkstra)</h2>
      <div className="controls">
        <button onClick={visualizeDijkstra} disabled={isVisualizing}>
          Visualize Dijkstra
        </button>
        <button onClick={resetGrid} disabled={isVisualizing}>
          Reset Grid
        </button>
      </div>

      <p className="legend">
        <span className="legend-item start">Start (Green)</span>
        <span className="legend-item end">End (Red)</span>
        <span className="legend-item wall">Wall (Black - Click to toggle)</span>
        <span className="legend-item visited">Visited (Blue)</span>
        <span className="legend-item path">Path (Yellow)</span>
      </p>

      <div className="grid">
        {grid.map((row, rowIdx) => (
          <div key={rowIdx} className="grid-row">
            {row.map((node, nodeIdx) => {
              let className = 'node';
              if (node.isStart) className += ' node-start';
              else if (node.isEnd) className += ' node-end';
              else if (node.isWall) className += ' node-wall';
              else if (node.isPath) className += ' node-path';
              else if (node.isVisited) className += ' node-visited';

              return (
                <div
                  key={nodeIdx}
                  className={className}
                  onMouseDown={() => toggleWall(node.row, node.col)}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PathfindingVisualizer;
