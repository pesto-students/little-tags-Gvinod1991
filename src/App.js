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

import Payment from "./pages/Payment/payment";
import AddAddress from "./pages/Address/addAddress";
import DeliverTo from "./pages/DeliverTo/deliver-to";

import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Orders from "./pages/Orders";

function App() {

  return (
      <Router>
        <Switch>
          <PrivateRoute path={'/products/:category'}>
            <Products />
          </PrivateRoute>
          <PrivateRoute path={'/product/:id'}>
            <ProductDetails />
<<<<<<< HEAD
          </PrivateRoute>
=======
          </Route>
>>>>>>> Cart changes
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
            <Orders />
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
  );
}

export default App;
