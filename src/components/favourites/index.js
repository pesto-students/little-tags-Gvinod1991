import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartCount,
  getProductLists,
  updateCartData,
} from "../../redux/actions";
import { getWishList } from "../../redux/actions/wishList";
import MainLayout from "../layout/MainLayout";
import Loader from "../Loader";
import ProductCard from "../productCard";
import "./favourites.scss";

const Favourites = () => {
  const { productsList, wishList, cartData,loading } = useSelector((store) => ({
    productsList: store.productList.productsList,
    wishList: store.wishList.wishList,
    loading:store.productList.loading,
    cartData: store.cartDetails.cartData,
  }));

  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductLists());
    dispatch(getWishList());
  }, [dispatch]);

  useEffect(() => {
    if (productsList && productsList.length > 0) {
      const filteredProducts = productsList.filter((value) => {
        return wishList.indexOf(value.id.toString()) !== -1;
      });

      setProducts(filteredProducts);
    }
  }, [productsList, wishList]);

  const addToCart = (item) => {
    const idOfItem = item.id.toString();
    const cartItem = {
      ["" + idOfItem]: {
        item,
        quantity: 1,
        totalPrice: item.price,
      },
    };

    if (cartData === null) {
      dispatch(updateCartData(cartItem));
    } else {
      if (Object.keys(cartData).indexOf(idOfItem) === -1) {
        cartData[idOfItem] = {
          item,
          quantity: 1,
          totalPrice: item.price,
        };
      } else {
        cartData[idOfItem]["quantity"] += 1;
        cartData[idOfItem]["totalPrice"] +=
          item.price * cartData[idOfItem]["quantity"];
      }

      dispatch(updateCartData(cartData));
    }
    dispatch(getCartCount());
  };
  return (
    <MainLayout>
      <div className="favourites-container">
        <div className="favourites">
          {" "}
          <h1>Your Favorites</h1>
        </div>
        {loading && <Loader/>}
        {!loading && products.length > 0 &&
          products.map((item) => (
            <ProductCard
              key={item.id}
              productId={item.id}
              title={item.title}
              productImage={item.image}
              pathname={`/product/${+item.id}`}
              price={item.price}
              wishList={true}
              addToCart={() => addToCart(item)}
            />
          ))}
          {!loading && products.length === 0 && <p>No items in your favorite section</p>}
      </div>
    </MainLayout>
  );
};

export default Favourites;
