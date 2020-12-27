import React from 'react';
import './auth-user-display.scss';
export default function AuthUserDisplay({parent,isSticky,source}){
  let className="";
  if(parent === 'hamburger' && source==='home'){
    className="user-section background-dark";
  }
  if(parent === 'hamburger'){
    className="user-section background-dark";
  }
  else{
    className="user-section"
  }
  return(
    <div className="row-box">
      <div className={className}>
        <span>
          <img className="user-icon" src={source==='home' && !isSticky ? "/user-white.svg" : parent==='hamburger' ?  "/user-white.svg" : "/user.svg"} alt="close icon" />
        </span>
        <h4 className={source==='home' && !isSticky ? "user-name color-light" : parent !== 'hamburger' ? "user-name color-dark" :"user-name color-light"}>Hey, Ayush</h4>
      </div>
    </div>
  )
}
