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
        itemsInCart.map(({item, quantity}) => (
          <ProductCard
            key={item.id}
            productId={item.id}
            title={item.title}
            productImage={item.image}
            pathname={`/product/${+item.id}`}
            price={item.price}
            quantity={quantity}
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
