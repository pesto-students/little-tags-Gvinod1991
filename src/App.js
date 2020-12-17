import React, { useState } from 'react';
import Modal from './components/modal/Modal'

import './App.css';

function App() {

  const [show, setShow] = useState(false);

  const closeModalHandler = () => {
    setShow(false);
  }

  return (
      <>
      {show ? <div className="back-drop" onClick={closeModalHandler}></div> : null}
      <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button>
      <Modal show={show} close={closeModalHandler} />
    </>
  );
}

export default App;
