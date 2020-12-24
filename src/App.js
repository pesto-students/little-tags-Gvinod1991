import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from './pages/Cart';
import PrivateRoute from './components/hoc/PrivateRoute';

import { Provider } from 'react-redux';
import { store } from './redux/store'
import Payment from "./pages/Payment/payment";
import AddAddress from "./pages/Address/addAddress";
import DeliverTo from "./pages/DeliverTo/deliver-to";

function App() {

  return (
    <Provider store={store}>
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
            <DeliverTo />
          </PrivateRoute>
          <PrivateRoute path={'/new-address'}>
            <AddAddress />
          </PrivateRoute>
          <PrivateRoute path={'/orders'}>
            <Cart />
          </PrivateRoute>
          <PrivateRoute path={'/checkout'}>
            <Payment />
          </PrivateRoute>
          <Route path={'/order-confirmation'}>
            <Cart />
          </Route>
          <Route path={'/'}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
