import { useState, useRef } from 'react';
import './DragAndDropBasic.css';

const DragAndDropBasic = () => {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ]);

  // Track the item being dragged and the item it's hovering over
  const dragItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, position) => {
    dragItem.current = position;
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const handleDragEnd = (e) => {
    const copyListItems = [...items];
    const dragItemContent = copyListItems[dragItem.current];

    // Remove item from old pos and insert at new pos
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);

    dragItem.current = null;
    dragOverItem.current = null;
    setItems(copyListItems);
  };

  return (
    <div className="dnd-container">
      <h2>Drag and Drop List</h2>
      <p>Drag items to reorder them.</p>

      <div className="dnd-list">
        {items.map((item, index) => (
          <div
            className="dnd-item"
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => e.preventDefault()}
          >
            {item}
            <span className="drag-handle">☰</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropBasic;
