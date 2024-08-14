import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='cart-page'>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className='cart-item'>
              <img src={item.image_url} alt={item.title} />
              <div className='cartItemDetails'>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity:</p>
                <div className='quantityControls'>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    -
                  </button>

                  {item.quantity}
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
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
          <h2>Total: ${total.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}

export default CartPage;
