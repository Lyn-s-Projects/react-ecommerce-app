import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function ProductsList({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className='productCard'>
      <div className='productImageContainer'>
        <img
          src={product.image_url}
          alt={product.name}
          className='product-image'
        />
      </div>
      <div className='textContainer'>
        <p>{product.name}</p>
        <p className='Price'>${product.price}</p>
      </div>
      <div>
        <button className='addToCart' onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductsList;
