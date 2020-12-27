import React, { useState } from 'react';
import './layout.scss';
import HamBurgerMenu from './HamBurgerMenu';

import { store } from '../../redux/store';
import LoginAction from '../loginAction';
import SearchBar from '../searchBar';
import Brand from '../brand';
import AuthUserDisplay from '../autUserDisplay';
import HeaderCart from '../headerCart';

export default function Header({isLoggedIn}) {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const getData = store.getState().loginReducer;
  return (
    <div>
      <div className="header">
        <Brand toggleHamburgerMenu={toggleHamburgerMenu} isLoggedIn={isLoggedIn} />
        <SearchBar/>
        {isLoggedIn ? <AuthUserDisplay/>:<LoginAction />}
        {isLoggedIn ? <HeaderCart/> : null}
      </div>
      {showHamburgerMenu && (
        <HamBurgerMenu toggleHamburgerMenu={toggleHamburgerMenu} showHamburgerMenu={showHamburgerMenu} isLoggedIn={isLoggedIn} />
      )}
    </div>
  )
}
