import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef(null);
  const cartIconRef = useRef(null);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const toggleCart = () => setIsOpen(!isOpen);

  // Close the cart when clicking outside
  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        isOpen &&
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        cartIconRef.current &&
        !cartIconRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  // Prevent scrolling when the cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className='cart-container'>
      <div className='cart-icon' onClick={toggleCart} ref={cartIconRef}>
        <span className='shopping-bag'></span> ({totalItems})
      </div>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`}></div>
      <div className={`cart-modal ${isOpen ? 'open' : ''}`} ref={cartRef}>
        <div className='cartModelContent'>
          <h2>Cart</h2>
          <button className='close-btn' onClick={toggleCart}>
            ×
          </button>

          {cart.length === 0 ? (
            <p className='emptyCart'>Your cart is empty.</p>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} className='cartItem'>
                  <img src={item.image_url} alt={item.name} />
                  <div className='cartItemDetails'>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <div className='quantityControls'>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className='cartRemove'
                      onClick={() => removeFromCart(item.id)}
                    >
                      <span className='removeItemIcon'></span>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className='cartTotal'>
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
              </div>
              <Link to='/cart' className='viewCartBtn' onClick={toggleCart}>
                View Full Cart
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
