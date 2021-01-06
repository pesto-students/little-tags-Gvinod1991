import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  getUserDetails,
  saveOrderDetails,
  clearCart,
  createRazorPayOrder
} from '../../redux/actions';
import AddressCard from '../../components/addressCard/addressCard';
import MainLayout from '../../components/layout/MainLayout';
import RazorPayCheckout from "../../components/RazorPayCheckout";
import './payment.scss';
import Loader from '../../components/Loader';
import {getDate} from '../../utilities/getDate';
import {config} from '../../config';

const Payment = () => {
  const history = useHistory();
  const {CURRENCY}=config;
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [totalOrderPrice,setTotalOrderPrice] = useState(0);
  const dispatch = useDispatch();
  const { loading, userDetails, user, saved, orderLoading, cartData, razorPayOrder } = useSelector(
    (state) => {
      return {
        userDetails: state.userDetails.userDetail,
        loading: state.userDetails.loading,
        user: state.loginReducer.userDetails,
        saved: state.orders.saved,
        orderLoading: state.orders.loading,
        cartData: state.cartDetails.cartData,
        razorPayOrder: state.orders.razorPayOrder
      };
    }
  );

  const itemsInCart = cartData && Object.keys(cartData).map((key) => cartData[key]);
 
  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  useEffect(()=>{
    const cartTotalPrice=itemsInCart.reduce((cartTotalPrice,items)=>{
      return cartTotalPrice+items.totalPrice;
    },0);
    console.log(cartTotalPrice);
    setTotalOrderPrice(cartTotalPrice);
  },[itemsInCart,setTotalOrderPrice]);

  useEffect(()=>{
    console.log(saved && totalOrderPrice);
    if(saved && totalOrderPrice > 0){
      const razorPayOrder={
        amount:totalOrderPrice,
        currency:CURRENCY
      }
      dispatch(clearCart());
      dispatch(createRazorPayOrder(razorPayOrder));
      if (paymentMethod === 'cod') {
        history.push('/order-confirmation');
      }
    }
  },[dispatch,saved,history,paymentMethod,totalOrderPrice,CURRENCY]);

  const handleRadioInputChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  const proceedToPayment = () => {
    console.log("called");
    const data = {
      paymentMethod,
      orderDate: getDate(new Date()),
      cartItems: itemsInCart,
      deliverDetails: userDetails,
      userEmail:user.email,
      paymentStatus:false
    }
    dispatch(saveOrderDetails(data));
  };
  return (
    <MainLayout>
      <div className="center">
        <h2>
          <strong>Delivering To</strong>
        </h2>
        {loading && <Loader />}
        {!loading && Object.keys(userDetails).length > 0 && (
          <AddressCard details={userDetails} isDummy={true} />
        )}
        <h2>
          <strong>Method of Payment</strong>
        </h2>
        {!loading && Object.keys(userDetails).length > 0 && (
          <>
            <div className="paymentGateways">
              <div>
                <input
                  type="radio"
                  value="razorPay"
                  onChange={handleRadioInputChange}
                  name="payment"
                />
                <label> Razor Pay</label>
              </div>
              {/* <div>
                <input
                  type="radio"
                  value="visa"
                  onChange={handleRadioInputChange}
                  name="payment"
                />{' '}
                <label> Visa / MasterCard / UPI</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="paypal"
                  onChange={handleRadioInputChange}
                  name="payment"
                />{' '}
                <label> Pay Pal</label>
              </div> */}
              <div>
                <input
                  type="radio"
                  value="cod"
                  onChange={handleRadioInputChange}
                  name="payment"
                />{' '}
                <label> COD</label>
              </div>
            </div>
            {itemsInCart && itemsInCart.length &&
              Object.keys(userDetails).length > 0 && 
              paymentMethod === 'cod' ?  
                  <button className="btn" onClick={proceedToPayment}>
                    <img src="/credit-card.svg" alt="shopping cart icon" />
                    <span>Proceed To Payment</span>
                  </button> : 
                <RazorPayCheckout proceedToPayment={proceedToPayment} user={user} razorPayOrder={razorPayOrder}/>
            }
            {orderLoading && <Loader />}
            {saved && paymentMethod === 'cod' && (
              <p className="text-success text-center">
                Order placed successfully{' '}
              </p>
            )}
            {saved && paymentMethod !== 'cod' && (
              <p className="text-success text-center">
                Redirecting to payment gateway....
              </p>
            )}
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Payment;
