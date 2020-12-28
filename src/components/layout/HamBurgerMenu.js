import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import './layout.scss';
import AuthUserDisplay from '../autUserDisplay';
import LoginAction from '../loginAction';
import Categories from '../categories';
import Brand from '../brand';
import { auth } from '../../services/firebase';
import { AppContext } from '../../redux/store';

export default function HamburgerMenu({
  showHamburgerMenu,
  toggleHamburgerMenu,
  isLoggedIn,
}) {
  const {state, dispatch} = useContext(AppContext);
  const logout = () => {
    auth.signOut();
    dispatch({ type: 'LOG_OUT', data: {}});
  }
  return (
    <div className="hamburger-menu-container">
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
          </ul>
        </div>
      )}
      {isLoggedIn && (
        <div className="logout-section">
          <button className="btn" onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}
