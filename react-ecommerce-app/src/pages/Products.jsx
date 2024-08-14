import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../contexts/CartContext';
import ProductsList from '../components/ProductsList';
import './Pages.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get('https://fake-coffee-api.vercel.app/api')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = selectedRegion
    ? products.filter(product => product.region === selectedRegion)
    : products;

  return (
    <div className='products'>
      <div className='filterDropdown'>
        <select
          value={selectedRegion}
          onChange={e => setSelectedRegion(e.target.value)}
        >
          <option value=''>All Regions</option>
          {[...new Set(products.map(product => product.region))].map(region => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div className='productsContainer'>
        <div className='product-grid'>
          {filteredProducts.map(product => (
            <ProductsList
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
