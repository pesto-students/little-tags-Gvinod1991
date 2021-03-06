import React from "react";
import { Link } from "react-router-dom";
import "./header-cart.scss";

export default function HeaderCart({ isSticky, source, numberOfItemsInCart }) {
  return (
    <div className="header-cart-container">
      <Link to="/cart">
        <img
          src={
            source === "home" && !isSticky
              ? "/shopping-cart.svg"
              : "/shopping-cart-black.svg"
          }
          alt="shopping cart icon"
        />
        <span className="badge badge-warning lblCartCount">
          {" "}
          {numberOfItemsInCart}{" "}
        </span>
      </Link>
    </div>
  );
}
