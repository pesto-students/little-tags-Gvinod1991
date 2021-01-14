import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import { isUserLoggedIn } from '../../redux/actions/loginAction';

export default function PrivateRoute({ children, ...rest }) {
  const isLoggedIn  = isUserLoggedIn();
  
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
