import React from 'react';
import './header-cart.scss';

export default function HeaderCart({isSticky,source}){
  return(
    <div className="header-cart-container">
      <img src={source==='home' && !isSticky ? "/shopping-cart.svg" : "/shopping-cart-black.svg"} alt="shopping cart icon" />
    </div>
  )
}