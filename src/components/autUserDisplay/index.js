import React from 'react';
import './auth-user-display.scss';
export default function AuthUserDisplay(){
  return(
    <div className="row-box">
      <div className="user-section">
        <span>
          <img className="user-icon" src="/user-white.svg" alt="close icon" />
        </span>
        <h4 className="user-name">Hey, Ayush</h4>
      </div>
    </div>
  )
}
