import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function ProductsList({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className='product-card'>
      <img
        src={product.image_url}
        alt={product.name}
        className='product-image'
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <div>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductsList;
