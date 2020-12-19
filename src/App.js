import React, { useState, useEffect } from "react";
import Modal from "./components/modal/Modal";
import { auth } from "./services/firebase";
import Dashboard from'./components/dashboard/Dashboard';
import ListDashboard from'./components/list-dashboard/ListDashboard';
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from './pages/Cart';
import PrivateRoute from './components/hoc/PrivateRoute';

function App() {
  const [show, setShow] = useState(false);
  const [user, setuser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (userIdentity) => {
      if (userIdentity) {
        setShow(false);
        const { displayName, email } = userIdentity;
        setuser({
          displayName,
          email
        });
      } else {
        let pop_status = localStorage.getItem("pop_status");
        if (!pop_status) {
          setShow(true);
          localStorage.setItem("pop_status", 1);
        }
      }
    });
  }, []);

  console.log("USER", user);
  const closeModalHandler = () => {
    setShow(false);
  };

  return (
    // <div>
    //   {show ? (
    //     <>
    //     {/* <div className="back-drop" onClick={closeModalHandler}></div> */}
    //     <Modal show={show} close={closeModalHandler} />
    //     </>
    //   ) : null}
     

    //   <Dashboard />
    //   <ListDashboard/>
    // </div>
    <Router>
      <Switch>
        <Route path={'/products/:categoryId'}>
          <Home/>
        </Route>
        <Route path={'/product/:id'}>
          <Home/>
        </Route>
        <PrivateRoute path={'/cart'}>
          <Cart/>
        </PrivateRoute>
        <PrivateRoute path={'/address-list'}>
          <Cart/>
        </PrivateRoute>
        <PrivateRoute path={'/new-address'}>
          <Cart/>
        </PrivateRoute>
        <PrivateRoute path={'/orders'}>
          <Cart/>
        </PrivateRoute>
        <PrivateRoute path={'/checkout'}>
          <Cart/>
        </PrivateRoute>
        <PrivateRoute path={'/order-confirmation'}>
          <Cart/>
        </PrivateRoute>
        <Route path={'/'}>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
