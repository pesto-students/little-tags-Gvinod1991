import React,{useEffect} from 'react';
import dotenv from 'dotenv';
dotenv.config();

export default function RazorPayCheckout({ proceedToPayment, user, razorPayOrder }) {
  
  useEffect(()=>{
    if(Object.keys(razorPayOrder).length > 0){
    const {amount,id}=razorPayOrder;
    const {email,displayName}=user;
    const options = {
      key: process.env.RAZOR_PAY_KEY,
      amount: amount * 100, // 2000 paise = INR 20, amount in paisa
      image: '',
      order_id: id,
      handler: (response) => {
        console.log(response);
      },
      prefill: {
        name: displayName,
        email: email,
      },
      theme: {
        color: '#33b7aa',
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
    rzp.open();
  };
},[razorPayOrder,user]);

  return (
      <button className="btn" onClick={proceedToPayment}>
        <img src="/credit-card.svg" alt="credit icon" />
        <span>Proceed To Payment</span>
      </button>
  );
}
