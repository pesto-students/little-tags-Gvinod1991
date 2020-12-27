import React from 'react';
import PropTypes from 'prop-types';
import './brand.scss';
export default function Brand({toggleHamburgerMenu,showHamburgerMenu}){
  return(
    <div className="brand-container">
      <img
        onClick={() => toggleHamburgerMenu()}
        className="menu-icon"
        src={showHamburgerMenu ? "/close.svg" : "/menu.svg"}
        alt="icon"
      />
      <div className="brand-name">Little Tags</div>
    </div>
  )
}

Brand.propTypes=({
  toggleHamburgerMenu:PropTypes.func.isRequired
});
