import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './layout.scss';
import AuthUserDisplay from '../autUserDisplay';
import LoginAction from '../loginAction';
import Categories from '../categories';
import Brand from '../brand';
import { logOut } from '../../redux/actions/loginAction';

export default function HamburgerMenu({
  showHamburgerMenu,
  toggleHamburgerMenu,
  isLoggedIn,
}) {
  

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
  }
  return (
    <div key={showHamburgerMenu+1} className={showHamburgerMenu ? "show-hamburger hamburger-menu-container": "hide-hamburger"}>
      <div className="brand-wrapper-hamburger">
        <Brand
          toggleHamburgerMenu={toggleHamburgerMenu}
          showHamburgerMenu={showHamburgerMenu}
        />
      </div>
      {isLoggedIn ? <AuthUserDisplay parent="hamburger" /> : <LoginAction />}

      <Categories />

      <div className="white-space"></div>

      {isLoggedIn && (
        <div className="nav-menu">
          <ul>
            <li>
              <Link to="/orders">Past Orders</Link>
            </li>
            <li>
              <Link to="/new-address">Add Address</Link>
            </li>
            <li>
              <Link to="/wish-list">Your Favourites</Link>
            </li>
          </ul>
        </div>
      )}
      {isLoggedIn && (
        <div className="logout-section">
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}
