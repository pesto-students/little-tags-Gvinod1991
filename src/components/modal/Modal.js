import React from "react";
import { signInWithGoogle, signInWithFacebook } from "../../services/firebase";
import "./Modal.scss";

const Modal = (props) => {
  const { show, close } = props;
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
                close();
              }}
            >
              <span>G</span>Google Account
            </button>
            <button id="faceBook"
            onClick={() => {
              signInWithFacebook();
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
