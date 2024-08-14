import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
      <Cart />
    </nav>
  );
}

export default Navbar;
