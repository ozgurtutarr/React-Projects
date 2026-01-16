import { useState, useRef, useEffect } from 'react';
import './FigmaCloneBasic.css';

const FigmaCloneBasic = () => {
  const canvasRef = useRef(null);
  const [tool, setTool] = useState('select'); // select | rect | circle | text
  const [elements, setElements] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear
    ctx.fillStyle = '#f0f0f0'; // bg
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw elements
    elements.forEach((el) => {
      ctx.fillStyle = el.color || '#000';
      if (el.type === 'rect') {
        ctx.fillStyle = '#1bc47d';
        ctx.fillRect(el.x, el.y, el.w, el.h);
        // Selection border
        ctx.strokeStyle = '#0d99ff';
        ctx.lineWidth = 1;
        ctx.strokeRect(el.x, el.y, el.w, el.h);
      } else if (el.type === 'circle') {
        ctx.fillStyle = '#f24e1e';
        ctx.beginPath();
        ctx.arc(
          el.x + el.w / 2,
          el.y + el.h / 2,
          Math.abs(el.w) / 2,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
    });
  }, [elements, canvasRef.current?.width, canvasRef.current?.height]);

  const getMousePos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseDown = (e) => {
    if (tool === 'select') return;
    setIsDrawing(true);
    setStartPos(getMousePos(e));
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const currentPos = getMousePos(e);
    // Live preview could be added here
  };

  const handleMouseUp = (e) => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const endPos = getMousePos(e);

    const w = endPos.x - startPos.x;
    const h = endPos.y - startPos.y;

    if (Math.abs(w) < 5 || Math.abs(h) < 5) return;

    setElements([
      ...elements,
      {
        type: tool,
        x: startPos.x,
        y: startPos.y,
        w,
        h,
        id: Date.now(),
      },
    ]);
  };

  return (
    <div className="figma-container">
      <header className="figma-toolbar">
        <div className="figma-icon">F</div>
        <div className="tools-group">
          <button
            className={tool === 'select' ? 'active' : ''}
            onClick={() => setTool('select')}
          >
            ↖
          </button>
          <button
            className={tool === 'rect' ? 'active' : ''}
            onClick={() => setTool('rect')}
          >
            ⬜
          </button>
          <button
            className={tool === 'circle' ? 'active' : ''}
            onClick={() => setTool('circle')}
          >
            ⚪
          </button>
          <button
            className={tool === 'text' ? 'active' : ''}
            onClick={() => setTool('text')}
          >
            T
          </button>
        </div>
        <div className="file-name">Untitled</div>
        <div className="zoom-level">100%</div>
        <button className="share-btn-figma">Share</button>
      </header>

      <div className="workspace">
        <aside className="layers-panel">
          <h3>Layers</h3>
          <ul>
            {elements.map((el, i) => (
              <li key={el.id}>
                {el.type} {i + 1}
              </li>
            ))}
          </ul>
        </aside>

        <div className="canvas-area">
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          />
        </div>

        <aside className="properties-panel">
          <h3>Design</h3>
          <div className="prop-row">
            <label>W</label> <input type="number" readOnly value="100" />
          </div>
          <div className="prop-row">
            <label>H</label> <input type="number" readOnly value="100" />
          </div>
          <div className="prop-row">
            <label>Fill</label> <div className="color-box"></div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default FigmaCloneBasic;
