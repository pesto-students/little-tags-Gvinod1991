import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/productCard";
import { getTotalPrice } from "../../redux/actions/cartDetails";
import { Link } from "react-router-dom";

import "./cart.scss";

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("myCart"));
  const itemsInCart = Object.keys(cart).map((key) => cart[key]);

  const { totalPriceList } = useSelector((store) => ({
    totalPriceList: store.cartDetails.totalPriceList,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [dispatch]);

  return (
    <div className="cart-container">
      <div className="Your-Cart">Your Cart</div>
      {Object.keys(totalPriceList).length > 0 ? (
        itemsInCart.map((item) => (
          <ProductCard
            key={item.item.id}
            productId={item.item.id}
            title={item.item.title}
            productImage={item.item.image}
            pathname={`/product/${+item.item.id}`}
            price={item.item.price}
            quantity={item.quantity}
          />
        ))
      ) : (
        <div className="centeredText">
          <div className="center-div">
            <div className="empty-cart">No Items In the Cart</div>
            <Link to="/"><button className="btn">Go Shopping</button></Link>
          </div>
        </div>
      )}
    </div>
  );
}
