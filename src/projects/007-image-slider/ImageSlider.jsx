import { useState } from 'react';

const ImageSlider = () => {
  const images = [
    'https://picsum.photos/id/10/600/400',
    'https://picsum.photos/id/11/600/400',
    'https://picsum.photos/id/12/600/400',
    'https://picsum.photos/id/13/600/400',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Image Slider</h2>
      <div style={{ position: 'relative' }}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
        />

        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '50%',
          }}
        >
          &#10094;
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '50%',
          }}
        >
          &#10095;
        </button>
      </div>
      <div style={{ marginTop: '10px' }}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              margin: '0 5px',
              cursor: 'pointer',
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? '#333' : '#ccc',
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
