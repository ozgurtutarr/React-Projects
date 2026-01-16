import { useState } from 'react';
import './EcommercePlatform.css';

const PRODUCTS = [
  {
    id: 1,
    name: 'Minimalist Watch',
    price: 149,
    category: 'Accessories',
    img: 'https://via.placeholder.com/200?text=Watch',
  },
  {
    id: 2,
    name: 'Leather Bag',
    price: 299,
    category: 'Accessories',
    img: 'https://via.placeholder.com/200?text=Bag',
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    price: 199,
    category: 'Electronics',
    img: 'https://via.placeholder.com/200?text=Headphones',
  },
  {
    id: 4,
    name: 'Smart Speaker',
    price: 99,
    category: 'Electronics',
    img: 'https://via.placeholder.com/200?text=Speaker',
  },
  {
    id: 5,
    name: 'Denim Jacket',
    price: 89,
    category: 'Clothing',
    img: 'https://via.placeholder.com/200?text=Jacket',
  },
  {
    id: 6,
    name: 'Running Shoes',
    price: 129,
    category: 'Clothing',
    img: 'https://via.placeholder.com/200?text=Shoes',
  },
];

const EcommercePlatform = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('products'); // products | cart | checkout | success

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    setView('processing');
    setTimeout(() => {
      setCart([]);
      setView('success');
    }, 2000);
  };

  return (
    <div className="ecom-container">
      <nav className="ecom-nav">
        <div className="ecom-logo" onClick={() => setView('products')}>
          SHOPVERSE
        </div>
        <div className="ecom-cart-icon" onClick={() => setView('cart')}>
          🛒{' '}
          <span className="cart-badge">
            {cart.reduce((s, i) => s + i.quantity, 0)}
          </span>
        </div>
      </nav>

      <main className="ecom-main">
        {view === 'products' && (
          <div className="products-grid">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img-wrapper">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="product-details">
                  <h4>{product.name}</h4>
                  <p className="price">${product.price}</p>
                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {view === 'cart' && (
          <div className="cart-view">
            <h2>Your Shopping Cart</h2>
            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty.</p>
                <button onClick={() => setView('products')}>
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-list">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img src={item.img} alt={item.name} />
                      <div className="item-info">
                        <h4>{item.name}</h4>
                        <p>
                          ${item.price} x {item.quantity}
                        </p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)}>
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>${total}</span>
                  </div>
                  <div className="summary-row">
                    <span>Tax (10%)</span>
                    <span>${(total * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="summary-total">
                    <span>Total</span>
                    <span>${(total * 1.1).toFixed(2)}</span>
                  </div>
                  <button
                    className="checkout-btn"
                    onClick={() => setView('checkout')}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {view === 'checkout' && (
          <div className="checkout-view">
            <h2>Secure Checkout</h2>
            <form className="checkout-form" onSubmit={handleCheckout}>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" required placeholder="you@example.com" />
              </div>
              <div className="form-group">
                <label>Shipping Address</label>
                <input type="text" required placeholder="123 Main St" />
              </div>
              <div className="form-group">
                <label>Credit Card</label>
                <div className="card-input-mock">
                  <input type="text" placeholder="0000 0000 0000 0000" />
                  <input type="text" placeholder="MM/YY" className="short" />
                  <input type="text" placeholder="CVC" className="short" />
                </div>
              </div>
              <button type="submit" className="pay-btn">
                Pay ${(total * 1.1).toFixed(2)}
              </button>
            </form>
          </div>
        )}

        {view === 'processing' && (
          <div className="processing-view">
            <div className="spinner"></div>
            <p>Processing Payment...</p>
          </div>
        )}

        {view === 'success' && (
          <div className="success-view">
            <div className="success-icon">✓</div>
            <h2>Order Confirmed!</h2>
            <p>
              Thank you for your purchase. A confirmation email has been sent.
            </p>
            <button onClick={() => setView('products')}>
              Continue Shopping
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default EcommercePlatform;
