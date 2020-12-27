import React from 'react';
import './login-action.scss';
export default function LoginAction({openModalHandler}){
  return(
    <div className="login-container" onClick={openModalHandler}>
      Login/SignUp
    </div>
  )
}