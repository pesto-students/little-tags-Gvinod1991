import React, {useContext} from 'react';
import {Redirect,Route} from 'react-router-dom';
import { AppContext } from '../../redux/store';

export default function PrivateRoute({ children, ...rest }) {
  // const {state} = useContext(AppContext);
  // const isLoggedIn = state ? state.isLoggedIn: false;
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
