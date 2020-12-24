import React from 'react';
import Counter from '../../components/counter/counter';
import './cart.scss';

export default function Cart() {
  return (
    <>
      <div className="Your-Cart">Your Cart</div>
      <div className="grid-container">
        <div className="card-logo">
          <img src="/purple-jacket.png" alt="purpleJacket" className="cartImage" />
        </div>
        <div className="item2">
          <div className="product-description">
            Faux Leather Jacket
            <Counter />
          </div>
        </div>
        <div className="product-description">
          <span>₹ 1500.00</span>
        </div>
      </div>
    </>
  )
}