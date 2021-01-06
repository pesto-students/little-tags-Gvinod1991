import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout';
import OrderCard from '../../components/OrderCard';
import './orders.scss';
import { getOrders,getCartCount, getCartData, updateCartData } from '../../redux/actions';
import Loader from '../../components/Loader';
import Carousel from '../../components/carousel';
const images = [
  {image:'/purple-jacket.png',title:"RN Group"},
  {image:'/yellow-jacket.png',title:"RN Group"},
  {image:'/yellow-jacket.png',title:"RN Group"},
  {image:'/purple-jacket.png',title:"RN Group"},
  {image:'/purple-jacket.png',title:"RN Group"},
  {image:'/purple-jacket.png',title:"RN Group"}
];

export default function Orders() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { orderList, loading,user , cartData} = useSelector((state) => {
    return { orderList: state.orders.orderList,
      loading:state.orders.loading,
      user:state.loginReducer.userDetails,
      cartData: state.cartDetails.cartData,
      };
  });

  useEffect(()=>{
    dispatch(getCartData());
    const {email}=user;
    if(email){
      dispatch(getOrders(email));
    }
  },[dispatch,user]);
  
  const orderAgain =(item,quantity)=>{
    
    const idOfItem = item.id.toString();
    const cartItem = { ["" + idOfItem]: { item, quantity , totalPrice: item.price * quantity} };
    if (cartData === null) {
      dispatch(updateCartData(cartItem))
    } else {
      if (Object.keys(cartData).indexOf(idOfItem) === -1) {
        cartData[idOfItem] = { item, quantity: quantity , totalPrice: item.price * quantity};
      } else {
        cartData[idOfItem]["quantity"] += quantity;
        cartData[idOfItem]["totalPrice"] += item.price * quantity;
      }
      dispatch(updateCartData(cartData))
    }
    dispatch(getCartCount());
    history.push('/address-list');
  }
  return (
    <MainLayout>
      <>
      <div className="orders">
        <h2>Your Orders</h2>
        {loading && <Loader/>}
        {!loading && orderList && orderList.length > 0 && orderList.map((order) => {
          const { id } = order;
          return <OrderCard key={id} order={order} orderId={id} orderAgain={orderAgain} />;
        })}
      </div>
      {!loading && orderList && orderList.length > 0 && <div className="related-products-container">
          <h2>More You'll like</h2>
          <Carousel type={"list"} images={images} />
      </div>
      }
      </>
    </MainLayout>
  );
}
