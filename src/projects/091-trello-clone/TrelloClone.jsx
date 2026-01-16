import { useState, useReducer } from 'react';
import './TrelloClone.css';

const INITIAL_DATA = {
  columns: {
    'col-1': { id: 'col-1', title: 'To Do', items: ['Task 1', 'Task 2'] },
    'col-2': { id: 'col-2', title: 'In Progress', items: ['Task 3'] },
    'col-3': { id: 'col-3', title: 'Done', items: ['Task 4', 'Task 5'] },
  },
  columnOrder: ['col-1', 'col-2', 'col-3'],
};

const TrelloClone = () => {
  // Simple Drag and Drop using HTML5 API
  const [data, setData] = useState(INITIAL_DATA);
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedSourceCol, setDraggedSourceCol] = useState(null);

  const handleDragStart = (e, item, sourceColId) => {
    setDraggedItem(item);
    setDraggedSourceCol(sourceColId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, destColId) => {
    e.preventDefault();
    if (!draggedItem || !draggedSourceCol) return;

    // If dropped in same column, do nothing (for simplicity in this clone)
    if (
      draggedSourceCol === destColId &&
      data.columns[destColId].items.includes(draggedItem)
    ) {
      // Advanced: reordering within column
      return;
    }

    // Remove from source
    const newSourceItems = data.columns[draggedSourceCol].items.filter(
      (i) => i !== draggedItem
    );

    // Add to dest
    const newDestItems = [...data.columns[destColId].items, draggedItem];

    setData({
      ...data,
      columns: {
        ...data.columns,
        [draggedSourceCol]: {
          ...data.columns[draggedSourceCol],
          items: newSourceItems,
        },
        [destColId]: { ...data.columns[destColId], items: newDestItems },
      },
    });

    setDraggedItem(null);
    setDraggedSourceCol(null);
  };

  const addItem = (colId) => {
    const text = prompt('Enter task name:');
    if (text) {
      const newItems = [...data.columns[colId].items, text];
      setData({
        ...data,
        columns: {
          ...data.columns,
          [colId]: { ...data.columns[colId], items: newItems },
        },
      });
    }
  };

  return (
    <div className="trello-board">
      <h2 className="trello-header">Kanban Board Clone</h2>
      <div className="board-columns">
        {data.columnOrder.map((colId) => {
          const column = data.columns[colId];
          return (
            <div
              key={colId}
              className="board-column"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, colId)}
            >
              <h3 className="column-title">{column.title}</h3>
              <div className="card-list">
                {column.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="trello-card"
                    draggable
                    onDragStart={(e) => handleDragStart(e, item, colId)}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <button className="add-card-btn" onClick={() => addItem(colId)}>
                + Add a card
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrelloClone;
