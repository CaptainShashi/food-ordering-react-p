import React, { useState } from 'react';
import './Navbar.css'; // Correct way to import CSS
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt='Logo' className='logo' /></Link>
      <ul className='navbar-menu'>
        <li>
          <Link to='/' onClick={() => setMenu("home")} className={menu === 'home' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to='/explore-menu' onClick={() => setMenu("menu")} className={menu === 'menu' ? 'active' : ''}>Explore Menu</Link>
        </li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='Search Icon' />
      </div>
      <div className='navbar-search-icon'>
        <Link to='/cart'><img src={assets.basket_icon} alt='Basket Icon' /></Link>
        <div className='dot'></div>
      </div>
      <div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
