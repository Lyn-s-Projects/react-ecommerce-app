import React, { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';

function GlobalMessage() {
  const { message, setMessage } = useContext(CartContext);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);

  if (!message) return null;

  return <div className='global-message'>{message}</div>;
}

export default GlobalMessage;
