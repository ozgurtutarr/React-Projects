import { useState } from 'react';
import './EcommerceProductPage.css';

const EcommerceProductPage = () => {
  const product = {
    title: 'Minimalist Sneaker',
    price: 129.0,
    description:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80',
    ],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + quantity);
    alert(`Added ${quantity} items to cart!`);
  };

  return (
    <div className="product-page-container">
      <nav className="product-nav">
        <h1>SNEAKERS</h1>
        <div className="cart-icon">
          🛒 <span className="cart-badge">{cartCount}</span>
        </div>
      </nav>

      <div className="product-layout">
        <div className="product-gallery">
          <div className="main-image">
            <img src={mainImage} alt="Product Main" />
          </div>
          <div className="thumbnail-list">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumb ${idx}`}
                onClick={() => setMainImage(img)}
                className={mainImage === img ? 'active' : ''}
              />
            ))}
          </div>
        </div>

        <div className="product-details">
          <span className="company-name">SNEAKER COMPANY</span>
          <h2>{product.title}</h2>
          <p className="product-desc">{product.description}</p>

          <div className="price-tag">
            <span className="current-price">${product.price.toFixed(2)}</span>
            <span className="discount-badge">50%</span>
          </div>
          <span className="original-price">$250.00</span>

          <div className="actions">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <span>🛒</span> Add into cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceProductPage;
