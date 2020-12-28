import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './brand.scss';
export default function Brand({toggleHamburgerMenu,showHamburgerMenu,source,isSticky,parent}){
  return(
    <div className="brand-container">
      <img
        onClick={() => toggleHamburgerMenu()}
        className="menu-icon"
        src={showHamburgerMenu ? "/close.svg" : source==='home' && !isSticky ?  "/menu-white.svg" : "/menu.svg"}
        alt="icon"
      />
      <Link to="/"  className={source==='home' && !isSticky ? 'brand-name color-light' : parent==='hamburger' ?  'brand-name color-light' : 'brand-name color-dark'}>Little Tags</Link>
    </div>
  )
}

Brand.propTypes=({
  toggleHamburgerMenu:PropTypes.func.isRequired
});
