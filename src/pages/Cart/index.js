import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/productCard";
import { getTotalPrice } from "../../redux/actions/cartDetails";
import { Link,useHistory} from "react-router-dom";
import MainLayout from '../../components/layout/MainLayout';
import "./cart.scss";
export default function Cart() {
  const cart = localStorage.getItem("myCart") ? JSON.parse(localStorage.getItem("myCart")) : null
  const itemsInCart =cart && Object.keys(cart).map((key) => cart[key]);
  const history=useHistory();
  const { totalPriceList } = useSelector((store) => ({
    totalPriceList: store.cartDetails.totalPriceList,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
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
        <button className="btn" onClick={deliverTo}>Proceed</button>
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
