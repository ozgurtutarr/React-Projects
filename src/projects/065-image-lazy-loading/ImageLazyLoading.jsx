import { useState, useRef, useEffect } from 'react';
import './ImageLazyLoading.css';

const LazyImage = ({ src, alt, placeholder }) => {
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="img-wrapper" ref={imgRef}>
      {inView ? (
        <img src={src} alt={alt} className="fade-in" />
      ) : (
        <div className="placeholder" style={{ backgroundColor: placeholder }}>
          Loading...
        </div>
      )}
    </div>
  );
};

const ImageLazyLoading = () => {
  const images = [
    {
      id: 1,
      color: '#FFCDD2',
      src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?fit=crop&w=600&h=400',
    },
    {
      id: 2,
      color: '#F8BBD0',
      src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?fit=crop&w=600&h=400',
    },
    {
      id: 3,
      color: '#E1BEE7',
      src: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?fit=crop&w=600&h=400',
    },
    {
      id: 4,
      color: '#D1C4E9',
      src: 'https://images.unsplash.com/photo-1682687982185-531d09ec56fc?fit=crop&w=600&h=400',
    },
    {
      id: 5,
      color: '#C5CAE9',
      src: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?fit=crop&w=600&h=400',
    },
    {
      id: 6,
      color: '#B3E5FC',
      src: 'https://images.unsplash.com/photo-1682687982423-295485af8bc8?fit=crop&w=600&h=400',
    },
    {
      id: 7,
      color: '#B2EBF2',
      src: 'https://images.unsplash.com/photo-1682687220509-61b8a906ca19?fit=crop&w=600&h=400',
    },
    {
      id: 8,
      color: '#B2DFDB',
      src: 'https://images.unsplash.com/photo-1682687980961-d874a0b7962e?fit=crop&w=600&h=400',
    },
  ];

  return (
    <div className="lazy-loading-container">
      <h2>Lazy Loading Images</h2>
      <p>Scroll down to see images load as they enter the viewport</p>

      <div className="grid">
        {images.map((img) => (
          <LazyImage
            key={img.id}
            src={img.src}
            alt={`Random ${img.id}`}
            placeholder={img.color}
          />
        ))}
        {/* Duplicate list to enable more scrolling */}
        {images.map((img) => (
          <LazyImage
            key={`${img.id}-dup`}
            src={img.src}
            alt={`Random ${img.id}`}
            placeholder={img.color}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageLazyLoading;
