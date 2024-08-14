import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../assets/logoBlack.png';

const Footer = () => {
  return (
    <>
      <div className='footerContainer'>
        <div className='footerNav'>
          <div className='footerLogo'>
            <img src={FooterLogo} alt='Logo' />
          </div>
          <div className='footerLinks'>
            <ul>
              <li>Home</li>
              <li>Products</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='copyRights'>© ALYNNA APURA 2024</div>
    </>
  );
};

export default Footer;
