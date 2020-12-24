import React from 'react';
import './product-details.scss';
import MainLayout from '../../components/layout/MainLayout';
import Carousel from '../../components/carousel';
export default function ProductDetails(){
  return(
    <MainLayout>
       
    <div className="product-details-container">
      <div className="product-carousal">
          <Carousel type='stack' />
      </div>
      <div className="product-details">
        <h2 className="product-title">Faux Leather Jacket</h2>
        <div className="price-wrapper">
            <img className="inr-symbol" src="/inr.svg" alt="inr currency symbol"/>
            <div className="price">1200</div>
        </div>
        <div className="product-description">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="variant-wrapper">
          <h2>Size</h2>
          <ul>
            <li>XS</li>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
        </div>
        <div className="quantity-wrapper">
          <h2>Quantity</h2>
          <div className="qty-counter">
            <span className="decrement">-</span>
            <span className="count">1</span>
            <span className="increment">+</span>
          </div>
        </div>
        <button className="cart-btn">
          <img src="/shopping-cart.svg" alt="shopping cart icon" />
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
    <div className="related-products-container">
      <h2 >More You'll like</h2>
      <Carousel type={'list'} />
    </div>
    </MainLayout>
  )
}