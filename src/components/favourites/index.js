import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails, getProductLists } from "../../redux/actions";
import { getWishList } from "../../redux/actions/wishList";
import MainLayout from "../layout/MainLayout";
import ProductCard from "../productCard";
import "./favourites.scss";

const Favourites = () => {
  const { productsList, wishList } = useSelector((store) => ({
    productsList: store.productList.productsList,
    wishList: store.wishList.wishList,
  }));

  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getProductLists());
    dispatch(getWishList());
  }, [dispatch]);

//   useEffect(() => {
//     dispatch(getProductDetails(id));
//   }, [productsList, dispatch]);


  useEffect(() => {
    if (productsList && productsList.length > 0) {
      const filteredProducts = productsList.filter((value) => {
        return wishList.indexOf(value.id.toString()) !== -1;
      });
      console.log(filteredProducts);
      setProducts(filteredProducts);
    }
  }, [productsList, wishList]);

  const addToCart = () => {

  }
  return (
    <>
      {/* // <MainLayout> */}
      <div className="favourites">
        {" "}
        <h1>Your Favorites</h1>
      </div>

      {products.length > 0 &&
        products.map((item) => (
          <div className="parent">
            <div className="background">
              <ProductCard
                key={item.id}
                productId={item.id}
                title={item.title}
                productImage={item.image}
                pathname={`/product/${+item.id}`}
                price={item.price}
              />
            </div>
            <div className="foreground">
              <button className="add-to-cart" onClick={ () => addToCart(item.id)}>Add To Cart</button>
            </div>
          </div>
        ))}
      {/* // </MainLayout> */}
    </>
  );
};

export default Favourites;
