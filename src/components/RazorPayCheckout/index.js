import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import dotenv from 'dotenv';
import { clearOrder, clearCart, getCartCount } from '../../redux/actions';

dotenv.config();

export default function RazorPayCheckout({
  proceedToPayment,
  user,
  razorPayOrder,
  disabled
}) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(razorPayOrder).length > 0) {
      const { amount, id } = razorPayOrder;
      const { email, displayName } = user;
      const options = {
        key: process.env.REACT_APP_RAZOR_PAY_KEY,
        amount: amount,
        image: '',
        order_id: id,
        handler: (response) => {
          dispatch(clearCart());
          dispatch(getCartCount());
          dispatch(clearOrder());
          if (response && response.razorpay_signature) {
            history.push('/order-confirmation');
          }
        },
        prefill: {
          name: displayName,
          email: email,
        },
        theme: {
          color: '#3399cc',
        },
        method: {
          netbanking: true,
          card: true,
          wallet: true,
          upi: true,
          emi: false,
        },
      };

      let rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        //throw new Error(response);
        console.log(response);
      });
      rzp.open();
    }
  }, [razorPayOrder, user, history, dispatch]);

  return (
    <button disabled={disabled} className={disabled ? "btn disabled":"btn"} onClick={proceedToPayment}>
      <img src="/credit-card.svg" alt="credit icon" />
      <span>Proceed To Payment</span>
    </button>
  );
}
