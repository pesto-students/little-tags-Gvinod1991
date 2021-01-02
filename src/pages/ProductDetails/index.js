import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./product-details.scss";
import MainLayout from "../../components/layout/MainLayout";
import Carousel from "../../components/carousel";
import Counter from "../../components/counter/counter";
import Loader from "../../components/Loader";
import { getProductDetails } from "../../redux/actions";
import { getCartCount } from "../../redux/actions/cartDetails";

const images = [
  {image:'/purple-jacket.png',title:"RN Group"},
  {image:'/yellow-jacket.png',title:"RN Group"},
  {image:'/yellow-jacket.png',title:"RN Group"},
  {image:'/purple-jacket.png',title:"RN Group"},
  {image:'/purple-jacket.png',title:"RN Group"},
  {image:'/purple-jacket.png',title:"RN Group"}
];

export default function ProductDetails() {
  let quantityOfItem = 1;
  const { id } = useParams();
  const { productDetails, loading } = useSelector((store) => ({
    productDetails: store.productDetails.productDetails,
    loading: store.productDetails.loading
  }));
  const { image, title, description, price, size } = productDetails;
  const dispatch1 = useDispatch();
  const dispatch2 = useDispatch();
  useEffect(() => {
    dispatch1(getProductDetails(id));
  }, [id, dispatch1]);

  const handleQuantity = (count) => {
    quantityOfItem = count;
  };

  const handleAddToCart = (item) => {
    const myCart = JSON.parse(localStorage.getItem("myCart"));
    const idOfItem = item.id.toString();
    const cartItem = { ["" + idOfItem]: { item, quantity: quantityOfItem , totalPrice: item.price * quantityOfItem} };
    if (myCart === null) {
      localStorage.setItem("myCart", JSON.stringify(cartItem));
    } else {
      if (Object.keys(myCart).indexOf(idOfItem) === -1) {
        myCart[idOfItem] = { item, quantity: quantityOfItem , totalPrice: item.price * quantityOfItem};
      } else {
        myCart[idOfItem]["quantity"] += quantityOfItem;
        myCart[idOfItem]["totalPrice"] += item.price * quantityOfItem;
      }
      localStorage.setItem("myCart", JSON.stringify(myCart));
    }
    dispatch2(getCartCount());
  };
  
  return (
    <MainLayout>
      <div>
        {loading && <Loader />}
        {productDetails && Object.keys(productDetails).length > 0 && (
          <div className="product-details-container">
            <div className="product-carousal">
              <Carousel type="stack" images={[{image}]} />
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
        <div className="related-products-container">
          <h2>More You'll like</h2>
          <Carousel type={"list"} images={images} />
        </div>
      </div>
    </MainLayout>
  );
}
