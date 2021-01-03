import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./product-details.scss";
import MainLayout from "../../components/layout/MainLayout";
import Carousel from "../../components/carousel";
import Counter from "../../components/counter/counter";
import Loader from "../../components/Loader";
import { getProductDetails,getProducts } from "../../redux/actions";
import { getCartCount, getCartData,
  updateCartData, } from "../../redux/actions/cartDetails";

export default function ProductDetails() {
  let quantityOfItem = 1;
  const [filteredProductList,setFilteredProductList]=useState([]);
  const { id } = useParams();
  const { productDetails, loading,productList, cartData } = useSelector((store) => ({
    productDetails: store.productDetails.productDetails,
    loading: store.productDetails.loading,
    productList:store.product.productList,
    cartData: store.cartDetails.cartData,
  }));
  const { image, title, description, price, size,category } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(getProducts(category));
  }, [category, dispatch]);

  useEffect(()=>{
    setFilteredProductList(productList.filter((product) => product.id !== parseFloat(id)));
  },[productList,id]);

  const handleQuantity = (count) => {
    quantityOfItem = count;
  };

  const handleAddToCart = (item) => {
    const idOfItem = item.id.toString();
    const cartItem = {
      ["" + idOfItem]: {
        item,
        quantity: quantityOfItem,
        totalPrice: item.price * quantityOfItem,
      },
    };

    if (cartData === null) {
      dispatch(updateCartData(cartItem));
    } else {
      if (Object.keys(cartData).indexOf(idOfItem) === -1) {
        cartData[idOfItem] = {
          item,
          quantity: quantityOfItem,
          totalPrice: item.price * quantityOfItem,
        };
      } else {
        cartData[idOfItem]["quantity"] += quantityOfItem;
        cartData[idOfItem]["totalPrice"] += item.price * quantityOfItem;
      }

      dispatch(updateCartData(cartData));
    }
    dispatch(getCartCount());
  };

  return (
    <MainLayout>
      <div>
        {loading && <Loader />}
        {productDetails && Object.keys(productDetails).length > 0 && (
          <div className="product-details-container">
            <div className="product-carousal">
              <Carousel type="stack" images={[{ image }]} />
            </div>
            <div className="product-details">
              <h2 className="product-title">{title}</h2>
              <div className="price-wrapper">
                <img
                  className="inr-symbol"
                  src="/inr.svg"
                  alt="inr currency symbol"
                />
                <div className="price">{price}</div>
              </div>
              <div className="product-description">
                <p>{description}</p>
              </div>
              {size && (
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
              )}
              <div className="quantity-wrapper">
                <h2>Quantity</h2>
                <Counter
                  quantity={quantityOfItem}
                  setQuantity={handleQuantity}
                />
              </div>
              <button
                className="cart-btn"
                onClick={() => handleAddToCart(productDetails)}
              >
                <img src="/shopping-cart.svg" alt="shopping cart icon" />
                <span>ADD TO CART</span>
              </button>
            </div>
          </div>
        )}
        {!loading && <div className="related-products-container">
          <h2>More You'll like</h2>
          <Carousel type={"list"} images={filteredProductList} />
          </div>
        }
      </div>
    </MainLayout>
  );
}
