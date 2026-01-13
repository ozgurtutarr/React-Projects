import { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const images = [
    'https://picsum.photos/id/1018/800/600',
    'https://picsum.photos/id/1015/800/600',
    'https://picsum.photos/id/1019/800/600',
    'https://picsum.photos/id/1016/800/600',
    'https://picsum.photos/id/1020/800/600',
    'https://picsum.photos/id/1021/800/600',
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="gallery-container">
      <h2>Image Gallery</h2>
      <p>Click an image to view it in lightbox.</p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImg(img)}
          >
            <img src={img} alt={`Gallery ${index}`} loading="lazy" />
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Enlarged" />
          <span className="close-lightbox">&times;</span>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
