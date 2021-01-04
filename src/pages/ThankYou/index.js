import React from 'react';
import {useHistory} from 'react-router-dom';
import './thankYou.scss';
import MainLayout from '../../components/layout/MainLayout';

const ThankYou = () => {
  const history= useHistory();
  const gotToOrders =()=>{
    history.push('/orders');
  }
    return (
      <MainLayout>
        <div className="thankyou-container">
          <div className="center">
              <div id="face">
                  <div className="left eye">
                      <div className="pupil"></div>
                  </div>
                  <div className="right eye">
                      <div className="pupil"></div>
                  </div>
                  <div id="mouth"></div>
              </div>
              <br />

          </div>
          <div className="note">Thank you for shopping with us</div>
          <p className="note-subtitle">Your order successfully placed.</p>
          <button onClick={gotToOrders}>Your Orders</button>
        </div>
      </MainLayout>
    )
}

export default ThankYou;