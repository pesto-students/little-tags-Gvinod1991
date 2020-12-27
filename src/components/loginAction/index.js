import React from 'react';
import './login-action.scss';
export default function LoginAction({openLoginModal,isSticky}){
  return(
    <div className={!isSticky ? 'login-container':'login-container color-dark' } onClick={()=>openLoginModal()}>
      Login/SignUp
    </div>
  )
}