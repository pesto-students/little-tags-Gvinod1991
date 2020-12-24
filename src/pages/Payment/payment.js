import React from "react";
import "./payment.scss";
const Payment = () => {
  return (
    <div className="center">
      <h2>
        <strong>Delivering To</strong>
      </h2>
      <div className="card">
        <div className="container">
          <strong>Ayush Jaiswal</strong>
          <div>1418 Avenue</div>
        </div>
      </div>
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
