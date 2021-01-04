import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getCartData,
  getTotalPrice,
  updateCartData,
} from "../../redux/actions/cartDetails";
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
  const { totalPriceList, cartData } = useSelector((store) => ({
    totalPriceList: store.cartDetails.totalPriceList,
    cartData: store.cartDetails.cartData,
  }));

  const history = useHistory();

  const dispatch = useDispatch();

  const handleQuantity = (count) => {
    if (count === 0) {
      delete cartData["" + productId];
    } else {
      cartData["" + productId].quantity = count;
      cartData["" + productId].totalPrice = price * count;
    }

    dispatch(updateCartData(cartData));
    dispatch(getTotalPrice());
  };

  useEffect(() => {
    dispatch(getCartData());
    dispatch(getTotalPrice());
  }, [dispatch]);

  const reRoute = () => {
    if (quantity) {
      return;
    }
    history.push({ pathname });
  };

  const reRouteFromCart = () => {
    history.push({ pathname });
  };

  return (
    <>
      <div className="product-container" onClick={reRoute}>
        <div className="row-left">
          <div className="product-image-container " onClick={reRouteFromCart}>
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
          <img
            className="inr-symbol"
            src="/inr.svg"
            alt="inr currency symbol"
          />
          {totalPriceList && totalPriceList[productId] ? (
            <div className="price">{totalPriceList[productId]}</div>
          ) : (
            <div className="price">{Number(price).toFixed(2)}</div>
          )}
        </div>
      </div>
    </>
  );
}
