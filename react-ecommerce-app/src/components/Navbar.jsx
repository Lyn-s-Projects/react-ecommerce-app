import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import './Components.css';
import Logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='navItems'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>
      <div className='cartNav'>
        <Cart />
      </div>
    </nav>
  );
}

export default Navbar;
