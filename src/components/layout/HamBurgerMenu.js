import React from 'react';
import { Link } from 'react-router-dom';
import './layout.scss';

export default function HamburgerMenu({ toggleHamburgerMenu }) {
  return (
    <div className="hamburger-menu-container">
      <div className="header">
        <span className="close-icon" onClick={() => toggleHamburgerMenu()}>
          <img src="/close.svg" alt="close icon" />
        </span>
        <h4 className="brand-name">Little Tags</h4>
      </div>
      <div className="user-section">
        <span>
          <img className="user-icon" src="/user-white.svg" alt="close icon" />
        </span>
        <h4 className="user-name">Hey, Ayush</h4>
      </div>
      <div className="categories-section">
        <h4>Categories</h4>
        <ul>
          <li>Accessories</li>
          <li>Jeans</li>
          <li>Tops</li>
          <li>Jackets</li>
        </ul>
      </div>
      <div className="white-space"></div>
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/orders">Past Orders</Link>
          </li>
          <li>
            <Link to="/new-address">Add Address</Link>
          </li>
        </ul>
      </div>
      <div className="logout-section">
        <button className="btn">Logout</button>
      </div>
    </div>
  );
}
