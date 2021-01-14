import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/productCard";
import { getTotalPrice, getCartData } from "../../redux/actions/cartDetails";
import { Link,useHistory} from "react-router-dom";
import MainLayout from '../../components/layout/MainLayout';
import "./cart.scss";
export default function Cart() {
  
  
  const history=useHistory();
  const { totalPriceList, cartData } = useSelector((store) => ({
    totalPriceList: store.cartDetails.totalPriceList,
    cartData: store.cartDetails.cartData,
  }));
  const itemsInCart = cartData ? Object.keys(cartData).map((key) => cartData[key]): [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
    dispatch(getTotalPrice());
  }, [dispatch]);

  const deliverTo =()=>{
    history.push('/address-list');
  }
  return (
    <MainLayout>
    <div className="cart-container">
      <div className="Your-Cart">Your Cart</div>
      {Object.keys(totalPriceList).length > 0 ? (
        <>
        {itemsInCart.map((item) => (
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
        }
        <div className="btn-wrapper">
          <button className="btn" onClick={deliverTo}>Proceed</button>
        </div>
        </>
      ) : (
        <div className="centeredText">
          <div className="center-div">
            <div className="empty-cart">No Items In the Cart</div>
            <Link to="/"><button className="btn">Go Shopping</button></Link>
          </div>
        </div>
      )}
    </div>
    </MainLayout>
  );
}
