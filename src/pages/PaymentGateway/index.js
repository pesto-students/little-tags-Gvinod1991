import React from 'react';
import MainLayout from '../../components/layout/MainLayout';

const PaymentGateway = () => {
    return (
      <MainLayout>
        <div className="thankyou-container">
          <div className="center">
              <div className="payment-card">
                <img  src="/credit-card-black.svg" alt=""/>
              </div>
              <br />
          </div>
          <div className="note">Please wait,Redirecting to payment gateway....</div>
        </div>
      </MainLayout>
    )
}

export default PaymentGateway;