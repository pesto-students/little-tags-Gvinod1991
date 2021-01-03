import React, { useEffect, useState } from 'react';
import {Redirect,Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions/loginAction';
import { auth } from '../../services/firebase';
import { useHistory } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [path, setPath] = useState('');
  
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    debugger;
      auth.onAuthStateChanged(async (userIdentity) => {
        if(userIdentity) {
          setIsLoggedIn(true);
          setPath(rest.path);
        }
        
      });
    
   
  },[rest.path]);

  useEffect(() => {
      const reRoute = () => {
        history.push(path);
      }
      reRoute();
    
  },[isLoggedIn, history, path])

  
  return (
    
    <Route
      {...rest}
      render={({ location }) =>
      isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
