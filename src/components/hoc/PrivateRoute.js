import React from 'react';
import {Redirect,Route} from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  const authToken= window.localStorage.getItem('authToken');
  return (
    <Route
      {...rest}
      render={({ location }) =>
      authToken ? (
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
