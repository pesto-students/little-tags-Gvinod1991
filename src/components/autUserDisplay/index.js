import React, { useContext} from 'react';
import { AppContext } from '../../redux/store';
import './auth-user-display.scss';


export default function AuthUserDisplay({parent,isSticky,source}){
  const {state} = useContext(AppContext);

  const capitalize = (fullName) => {
    if (typeof fullName !== 'string') return ''
    return fullName.charAt(0).toUpperCase() + fullName.slice(1)
  }


  const userName = state? capitalize(state.userId.displayName.split(' ')[0]): '';
  

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
        <h4 className={source==='home' && !isSticky ? "user-name color-light" : parent !== 'hamburger' ? "user-name color-dark" :"user-name color-light"}>Hey, {userName}</h4>
      </div>
    </div>
  )
}
