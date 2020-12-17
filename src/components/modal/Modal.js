import React from "react";
import './Modal.scss';

const Modal = (props) => {
    const { show, close } = props;
    return (
        <>
            <div className="modal-wrapper" style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? 1 : 0
            }}>
                <div className="modal-header">
                    <h1>Log in / Sign up</h1>
                </div>
                <div className="modal-title"><span>Log in / Sign up using your</span></div>
                <div className="wrap-buttons">
                    <div class="social-wrap">
                        <button id="googleplus"><span>G</span>Google Account</button>
                        <button id="faceBook"><span>f</span>Facebook Account</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Modal;