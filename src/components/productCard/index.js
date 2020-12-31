import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTotalPrice } from "../../redux/actions/cartDetails";
import Counter from "../counter/counter";
import "./product-card.scss";

export default function ProductCard({
  pathname,
  title,
  price,
  productImage,
  quantity,
  productId,
}) {
  
  const { totalPriceList } = useSelector((store) => ({
    totalPriceList: store.cartDetails.totalPriceList,
  }));
  
  const history = useHistory();

  const dispatch = useDispatch();

  const handleQuantity = (count) => {
    const itemsInCart = JSON.parse(localStorage.getItem("myCart"));
    if(count ===0) {
      delete itemsInCart["" + productId]; 
    } else {
      itemsInCart["" + productId].quantity = count;
      itemsInCart["" + productId].totalPrice = price * count;
    }
    localStorage.setItem("myCart", JSON.stringify(itemsInCart));
    dispatch(getTotalPrice());
  };

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [dispatch]);

  const reRoute = () => {
    if (quantity) {
      return;
    }
    history.push({ pathname });
  };

  return (
    <>
    <div
      className="product-container"
      onClick={reRoute}
    >
      <div className="row-left">
        <div className="product-image-container ">
          <img className="product-image" src={productImage} alt={title} />
        </div>
        <div>
          <span>{title}</span>
          <br />
          {quantity ? (
            <Counter quantity={quantity} setQuantity={handleQuantity} />
          ) : null}
        </div>
      </div>
      <div className="row-right">
        <img className="inr-symbol" src="/inr.svg" alt="inr currency symbol" />
        {totalPriceList && totalPriceList[productId] ? (
          <div className="price">{totalPriceList[productId]}</div>
        ) : (
          <div className="price">{price}</div>
        )}
      </div>
    </div>
    <div className="proceed">
      <button className="btn">Proceed</button>
    </div>
    </>
  );
}
