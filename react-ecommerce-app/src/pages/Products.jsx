import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../contexts/CartContext';
import ProductsList from '../components/ProductsList';

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));

    axios
      .get('https://fakestoreapi.com/products/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className='products'>
      <h1>Our Products</h1>
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        <option value=''>All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
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
  );
}

export default Products;
