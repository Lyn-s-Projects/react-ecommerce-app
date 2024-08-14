import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ProductsList from '../components/ProductsList';
import { CartContext } from '../contexts/CartContext';

function Home() {
  const [topProducts, setTopProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get('https://fake-coffee-api.vercel.app/api')
      .then(response => setTopProducts(response.data))
      .catch(error => console.error('Error fetching top products:', error));
  }, []);

  return (
    <div className='home'>
      <h1>Welcome to Our Store</h1>
      <h2>Top Products</h2>
      <div className='product-grid'>
        {topProducts.map(product => (
          <ProductsList
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
