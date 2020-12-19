import React,{ useState } from 'react';
import './layout.scss';
import HamBurgerMenu from './HamBurgerMenu';
export default function Header() {
  const [showHamburgerMenu,setShowHamburgerMenu]=useState(false);

  const toggleHamburgerMenu=()=>{
    setShowHamburgerMenu(!showHamburgerMenu);
  }

  return (
    <div>
      <div className="header">
        <div className="brand-container">
          <img onClick={()=>toggleHamburgerMenu()} className="menu-icon" src="/menu.svg" alt="icon" />
          <div className="brand-name">Little Tags</div>
        </div>
        <div className="search-bar">
          <img className="search-icon" src="/search-icon.svg" alt="search-icon" />
          <input type="text" placeholder="Search...." />
        </div>
        <div className="login-container">Login/SignUp</div>
      </div>
      {showHamburgerMenu && <HamBurgerMenu toggleHamburgerMenu={toggleHamburgerMenu}/>}
    </div>
  );
}