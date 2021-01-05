import React, { useEffect } from "react";
import { signInWithGoogle, signInWithFacebook } from "../../services/firebase";
import { useDispatch } from 'react-redux';

import "./Modal.scss";
import { isUserVisitingForTheFirstTime, logIn, setUserVisit } from "../../redux/actions/loginAction";

const Modal = (props) => {
  const { show, close } = props;
  const dispatch = useDispatch();

  useEffect(()=> {
    if(show && isUserVisitingForTheFirstTime()) {
      setUserVisit();
    }
  }, [dispatch, show]);

  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: show ? "translateY(0vh)" : "translateY(-100vh)"
        }}
      >
        <div className="modal-header">
          <h1>Log in / Sign up</h1>
        </div>
        <div className="modal-title">
          <span>Log in / Sign up using your</span>
          <span onClick={close} className="close-button topright">
            &times;
          </span>
        </div>
        <div className="wrap-buttons">
          <div className="social-wrap">
            <button
              id="googleplus"
              onClick={() => {
                signInWithGoogle();
                dispatch(logIn());
                close();
              }}
            >
              <span>G</span>Google Account
            </button>
            <button id="faceBook"
            onClick={() => {
              signInWithFacebook();
              dispatch(logIn());
              close();
            }}>
              <span>f</span>Facebook Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
