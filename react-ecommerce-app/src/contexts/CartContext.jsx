import React, { createContext, useState, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  const addToCart = useCallback(product => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setMessage(`Item successfully added to your cart! 🎉`);
  }, []);

  const removeFromCart = useCallback(productId => {
    setCart(prevCart => {
      const removedItem = prevCart.find(item => item.id === productId);
      const newCart = prevCart.filter(item => item.id !== productId);
      setMessage('Item successfully removed from your cart! 🗑️');
      return newCart;
    });
  }, []);

  const updateQuantity = useCallback((productId, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        message,
        setMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
