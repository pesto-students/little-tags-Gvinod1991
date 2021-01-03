import React from 'react';
import './order-card.scss';

export default function OrderCard({order:{
  cartItems,
  orderDate
},orderAgain,orderId}) {
  return (
    <>
    {cartItems && cartItems.length > 0 && cartItems.map((orderItem,index)=>{
        const {totalPrice,quantity,item}=orderItem;
        const {title,image,id}=item;
       return <div key={`${id}${orderId}`} className="order-container">
        <div className="row-left-order-card">
          <div className="order-image-container ">
            <img className="order-image" src={image} alt={title} />
          </div>
          <div className="order-description">
            <span>{title}</span>
            <p>Quantity :{quantity}</p>
            <div className="price-container">
              <img
                className="inr-symbol"
                src="/inr.svg"
                alt="inr currency symbol"
              />
              <div className="price">{totalPrice}</div>
            </div>
            <div className="order-date">{orderDate}</div>
          </div>
        </div>
        <div className="row-right">
          <button onClick={()=>orderAgain(item,quantity)}>Order Again</button>
        </div>
      </div>
      })
    }
    </>
  );
}
