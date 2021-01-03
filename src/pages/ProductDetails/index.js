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

  const [heart, setHeart] = useState(1);
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
              {/* <div className={"icon heart heart" + heart}>
                <svg
                  viewBox="-20 -28 545.00002 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0" />
                </svg>
              </div> */}
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
