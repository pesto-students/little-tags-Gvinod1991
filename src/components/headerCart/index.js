import React from 'react';
import './header-cart.scss';

export default function HeaderCart(){
  return(
    <div className="header-cart-container">
      <img src={"/shopping-cart-black.svg"} alt="shopping cart icon" />
    </div>
  )
}