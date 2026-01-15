import { useState } from 'react';
import './UndoRedoCapability.css';

// Custom Hook for Undo/Redo
const useUndoRedo = (initialState) => {
  const [past, setPast] = useState([]);
  const [present, setPresent] = useState(initialState);
  const [future, setFuture] = useState([]);

  const set = (newState) => {
    setPast([...past, present]);
    setPresent(newState);
    setFuture([]);
  };

  const undo = () => {
    if (past.length === 0) return;
    const previous = past[past.length - 1];
    const newPast = past.slice(0, past.length - 1);

    setFuture([present, ...future]);
    setPresent(previous);
    setPast(newPast);
  };

  const redo = () => {
    if (future.length === 0) return;
    const next = future[0];
    const newFuture = future.slice(1);

    setPast([...past, present]);
    setPresent(next);
    setFuture(newFuture);
  };

  const reset = (newState = initialState) => {
    setPast([]);
    setPresent(newState);
    setFuture([]);
  };

  return [
    present,
    set,
    undo,
    redo,
    reset,
    { canUndo: past.length > 0, canRedo: future.length > 0 },
  ];
};

const UndoRedoCapability = () => {
  const [count, setCount, undo, redo, reset, { canUndo, canRedo }] =
    useUndoRedo(0);
  const [text, setText, undoText, redoText, resetText, textMeta] =
    useUndoRedo('Hello');

  return (
    <div className="undo-redo-container">
      <h2>Undo / Redo Capability</h2>
      <p>Custom hook implementation managing state history.</p>

      <div className="demo-section">
        <h3>Counter Demo</h3>
        <div className="counter-display">{count}</div>
        <div className="controls">
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count * 2)}>x2</button>
        </div>
        <div className="history-controls">
          <button onClick={undo} disabled={!canUndo}>
            ↩ Undo
          </button>
          <button onClick={redo} disabled={!canRedo}>
            Redo ↪
          </button>
          <button onClick={() => reset(0)}>Reset</button>
        </div>
      </div>

      <div className="demo-section">
        <h3>Input Demo</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="demo-input"
        />
        <div className="history-controls">
          <button onClick={undoText} disabled={!textMeta.canUndo}>
            ↩ Undo
          </button>
          <button onClick={redoText} disabled={!textMeta.canRedo}>
            Redo ↪
          </button>
          <button onClick={() => resetText('Hello')}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default UndoRedoCapability;
