import React, { useState, useEffect } from "react";
import Modal from "./components/modal/Modal";
import { auth,facebookProvider } from "./services/firebase";

import "./App.css";

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
    <>
      {show ? (
        <div className="back-drop" onClick={closeModalHandler}></div>
      ) : null}
      <Modal show={show} close={closeModalHandler} />
    </>
  );
}

export default App;
