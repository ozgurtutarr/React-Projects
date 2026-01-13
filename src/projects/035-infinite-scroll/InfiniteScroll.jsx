import { useState, useEffect } from 'react';
import './InfiniteScroll.css';

const InfiniteScroll = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    loadMoreItems();
  }, [isFetching]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  };

  const loadMoreItems = () => {
    setTimeout(() => {
      setItems((prev) => [...prev, ...Array.from({ length: 10 })]);
      setIsFetching(false);
    }, 1000);
  };

  return (
    <div className="infinite-container">
      <h2>Infinite Scroll</h2>
      <p>Scroll down to load more items automatically.</p>

      <div className="item-list">
        {items.map((_, index) => (
          <div key={index} className="scroll-item">
            Item {index + 1}
          </div>
        ))}
      </div>

      {isFetching && (
        <div className="loading-spinner">Loading more items...</div>
      )}
    </div>
  );
};

export default InfiniteScroll;
