import { useState, useEffect } from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate API Fetch
    setTimeout(() => {
      setData([
        {
          id: 1,
          title: 'Understanding React',
          desc: 'React is a library for building UIs.',
        },
        {
          id: 2,
          title: 'Hooks Explained',
          desc: 'Hooks allow function components to have state.',
        },
        {
          id: 3,
          title: 'Context API',
          desc: 'Avoid prop drilling with Context.',
        },
      ]);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="skeleton-container">
      <h2>Skeleton Loader</h2>
      <button
        onClick={() => {
          setLoading(true);
          setData([]);
          setTimeout(() => {
            setLoading(false);
            setData([
              {
                id: 1,
                title: 'Understanding React',
                desc: 'React is a library for building UIs.',
              },
              {
                id: 2,
                title: 'Hooks Explained',
                desc: 'Hooks allow function components to have state.',
              },
              {
                id: 3,
                title: 'Context API',
                desc: 'Avoid prop drilling with Context.',
              },
            ]);
          }, 2000);
        }}
      >
        Refresh Data
      </button>

      <div className="cards-grid">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="card skeleton">
                <div className="skeleton-img"></div>
                <div className="skeleton-text title"></div>
                <div className="skeleton-text desc"></div>
              </div>
            ))
          : data.map((item) => (
              <div key={item.id} className="card">
                <div className="card-img-placeholder">Image</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
