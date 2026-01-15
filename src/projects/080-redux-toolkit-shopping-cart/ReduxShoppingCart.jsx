import { useReducer, createContext, useContext } from 'react';
import './ReduxShoppingCart.css';

// ----------------------------------------------------
// MOCKING REDUX TOOLKIT BEHAVIOR (VANILLA REACT)
// ----------------------------------------------------

// 1. Initial State
const initialState = {
  cart: [],
  products: [
    { id: 1, name: 'Premium Headphones', price: 199, image: '🎧' },
    { id: 2, name: 'Mechanical Keyboard', price: 149, image: '⌨️' },
    { id: 3, name: 'Gaming Mouse', price: 79, image: '🖱️' },
    { id: 4, name: '4K Monitor', price: 399, image: '🖥️' },
  ],
};

// 2. Actions (Slice-like)
const ACTIONS = {
  ADD_TO_CART: 'cart/addToCart',
  REMOVE_FROM_CART: 'cart/removeFromCart',
  CLEAR_CART: 'cart/clearCart',
};

// 3. Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      const existing = state.cart.find((item) => item.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case ACTIONS.CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
};

// 4. Store Provider
const StoreContext = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

const useSelector = (selector) => {
  const { state } = useContext(StoreContext);
  return selector(state);
};

const useDispatch = () => {
  const { dispatch } = useContext(StoreContext);
  return dispatch;
};

// ----------------------------------------------------
// COMPONENTS
// ----------------------------------------------------

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="product-list-rtk">
      <h3>Products</h3>
      <div className="products-grid-rtk">
        {products.map((product) => (
          <div key={product.id} className="product-card-rtk">
            <div className="product-icon">{product.image}</div>
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.ADD_TO_CART, payload: product })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-rtk">
      <h3>Shopping Cart</h3>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items-rtk">
            {cart.map((item) => (
              <li key={item.id}>
                <span>
                  {item.image} {item.name} (x{item.quantity})
                </span>
                <div>
                  <strong>${item.price * item.quantity}</strong>
                  <button
                    className="remove-btn-rtk"
                    onClick={() =>
                      dispatch({
                        type: ACTIONS.REMOVE_FROM_CART,
                        payload: item.id,
                      })
                    }
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total-rtk">
            <h4>Total: ${total}</h4>
            <button
              className="clear-btn-rtk"
              onClick={() => dispatch({ type: ACTIONS.CLEAR_CART })}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// Main Component
const ReduxShoppingCart = () => {
  return (
    <Provider>
      <div className="redux-cart-container">
        <h2>Redux Toolkit Shopping Cart (Simulated)</h2>
        <p>Using useReducer + Context to simulate Redux Store behavior.</p>

        <div className="cart-layout">
          <ProductList />
          <Cart />
        </div>
      </div>
    </Provider>
  );
};

export default ReduxShoppingCart;
