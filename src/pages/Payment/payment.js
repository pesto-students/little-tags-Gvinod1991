import React from "react";
import AddressCard from "../../components/addressCard/addressCard";
import "./payment.scss";
const Payment = () => {
  const list = 
  [
    {
      name: "Emerson",
      address : "9522 Libero. St.",
			city : "Lozzo Atestino",
			postal :"27476"
    }
    ];
  return (
    <div className="center">
      <h2>
        <strong>Delivering To</strong>
      </h2>
        {
        list.map((item,index) => (
          <AddressCard details = {item} isDummy= {true}/>
        
          )  )
      }
      <h2>
        <strong>Method of Payment</strong>
      </h2>
      <div className="paymentGateways">
        <div>
          <input type="radio" value="razorPay" name="payment" />
          <label> Razor Pay</label>
        </div>
        <div>
          <input type="radio" value="visa" name="payment" />{" "}
          <label> Visa / MasterCard / UPI</label>
        </div>
        <div>
          <input type="radio" value="paypal" name="payment" />{" "}
          <label> Pay Pal</label>
        </div>
      </div>
    </div>
  );
};

export default Payment;
