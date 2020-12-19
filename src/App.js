import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PrivateRoute from './components/hoc/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/products/:categoryId'}>
          <Home />
        </Route>
        <Route path={'/product/:id'}>
          <Home />
        </Route>
        <PrivateRoute path={'/cart'}>
          <Cart />
        </PrivateRoute>
        <PrivateRoute path={'/address-list'}>
          <Cart />
        </PrivateRoute>
        <PrivateRoute path={'/new-address'}>
          <Cart />
        </PrivateRoute>
        <PrivateRoute path={'/orders'}>
          <Cart />
        </PrivateRoute>
        <PrivateRoute path={'/checkout'}>
          <Cart />
        </PrivateRoute>
        <PrivateRoute path={'/order-confirmation'}>
          <Cart />
        </PrivateRoute>
        <Route path={'/'}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
