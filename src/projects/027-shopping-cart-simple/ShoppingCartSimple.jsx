import { useState } from 'react';
import './ShoppingCartSimple.css';

const ShoppingCartSimple = () => {
  const products = [
    { id: 1, name: 'Apple', price: 1.5 },
    { id: 2, name: 'Banana', price: 0.8 },
    { id: 3, name: 'Cherry', price: 2.0 },
    { id: 4, name: 'Date', price: 3.5 },
    { id: 5, name: 'Elderberry', price: 4.0 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      <div className="cart-layout">
        <div className="product-list">
          <h3>Products</h3>
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <span>
                {product.name} - ${product.price.toFixed(2)}
              </span>
              <button onClick={() => addToCart(product)}>Add</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>My Cart</h3>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  {item.name} - ${item.price.toFixed(2)}
                  <button onClick={() => removeFromCart(index)}>x</button>
                </li>
              ))}
            </ul>
          )}
          <hr />
          <div className="cart-total">Total: ${calculateTotal()}</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartSimple;
