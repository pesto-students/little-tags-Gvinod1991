import React from 'react';
import './login-action.scss';
export default function LoginAction({openModalHandler,isSticky}){
  return(
    <div className={!isSticky ? 'login-container':'login-container color-dark' } onClick={openModalHandler}>
      Login/SignUp
    </div>
  )
}