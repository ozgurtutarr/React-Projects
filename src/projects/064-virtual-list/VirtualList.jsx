import { useState, useRef, useEffect } from 'react';
import './VirtualList.css';

const VirtualList = () => {
  // 1. Generate large dataset
  const listItems = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  // 2. Constants
  const itemHeight = 40;
  const containerHeight = 400;
  const overscan = 5; // buffer items

  // 3. State
  const [scrollTop, setScrollTop] = useState(0);

  // 4. Calculations
  const totalHeight = listItems.length * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const visibleItemCount = Math.ceil(containerHeight / itemHeight);

  // Adjust range with buffer
  const start = Math.max(0, startIndex - overscan);
  const end = Math.min(
    listItems.length,
    startIndex + visibleItemCount + overscan
  );

  const visibleItems = listItems.slice(start, end).map((item, index) => ({
    index: start + index,
    text: item,
  }));

  const onScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div className="virtual-list-container">
      <h2>Virtual List (10,000 Items)</h2>
      <p>
        Only rendering items in viewport ({start} - {end})
      </p>

      <div
        className="scroll-container"
        style={{ height: containerHeight }}
        onScroll={onScroll}
      >
        <div className="inner-container" style={{ height: totalHeight }}>
          {visibleItems.map(({ index, text }) => (
            <div
              key={index}
              className="list-item"
              style={{
                height: itemHeight,
                top: index * itemHeight,
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualList;
