import React from 'react';
import { useHistory } from 'react-router-dom';
import './product-card.scss';

export default function ProductCard({ pathname, title, price, productImage }) {
  const history = useHistory();
  return (
    <div
      className="product-container"
      onClick={() => history.push({ pathname })}
    >
      <div className="row-left">
        <div className="product-image-container ">
          <img className="product-image" src={productImage} alt={title} />
        </div>
        <span>{title}</span>
      </div>
      <div className="row-right">
        <img className="inr-symbol" src="/inr.svg" alt="inr currency symbol" />
        <div className="price">{price}</div>
      </div>
    </div>
  );
}
