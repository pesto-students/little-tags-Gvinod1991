import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../components/layout/MainLayout';
import OrderCard from '../../components/OrderCard';
import './orders.scss';
import { getOrders } from '../../redux/actions';
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
  const { orderList, loading,user } = useSelector((state) => {
    return { orderList: state.orders.orderList,
      loading:state.orders.loading,
      user:state.loginReducer.userDetails
      };
  });
  useEffect(()=>{
    const {email}=user;
    if(email){
      dispatch(getOrders(email));
    }
  },[dispatch,user]);
  return (
    <MainLayout>
      <>
      <div className="orders">
        <h2>Your Orders</h2>
        {loading && <Loader/>}
        {!loading && orderList && orderList.length > 0 && orderList.map((order) => {
          const { id } = order;
          return <OrderCard key={id} order={order} />;
        })}
      </div>
      {!loading && <div className="related-products-container">
          <h2>More You'll like</h2>
          <Carousel type={"list"} images={images} />
      </div>
      }
      </>
    </MainLayout>
  );
}
