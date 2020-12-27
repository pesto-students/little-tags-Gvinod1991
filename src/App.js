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

import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={'/products/:categoryId'}>
            <Products />
          </Route>
          <Route path={'/product/:id'}>
            <ProductDetails />
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
          <PrivateRoute path={'/order-confirmation'}>
            <Cart />
          </PrivateRoute>
          <Route path={'/'}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
