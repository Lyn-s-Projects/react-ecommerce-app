import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import { CartContext } from '../contexts/CartContext';
import './Pages.css';
import Banner from '../assets/hero-banner.jpg';
import Footer from './Footer';

function Home() {
  const [topProducts, setTopProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get('https://fake-coffee-api.vercel.app/api?limit=5')
      .then(response => setTopProducts(response.data))
      .catch(error => console.error('Error fetching top products:', error));
  }, []);

  return (
    <div className='home'>
      <section className='Banner'>
        <img src={Banner} alt='Banner' />
      </section>
      <section className='topProducts'>
        <div className='sectionTitle'>Top Products</div>
        <div className='productGrid'>
          {topProducts.map(product => (
            <ProductsList
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
      <section className='Banner' id='exploreMore'>
        <div>
          <div className='Content'>
            <div className='Title'>Explore More Products</div>
            <div className='Subtitle'>
              Discover even more great items in our collection.
            </div>
          </div>
          <div className='viewAll'>
            <Link to='/products'>
              <button>VIEW ALL PRODUCTS</button>
            </Link>
          </div>
        </div>
      </section>
      <section className='Footer'>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
