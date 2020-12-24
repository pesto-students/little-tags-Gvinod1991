import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Modal from '../../components/modal/Modal';
// import { auth } from '../../services/firebase';
import Dashboard from '../../components/dashboard/Dashboard';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer'


export default function Home() {
  const [show, setShow] = useState(false);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   auth.onAuthStateChanged(async (userIdentity) => {
  //     if (userIdentity) {
  //       setShow(false);
  //       const { displayName, email } = userIdentity;
  //       dispatch({
  //         displayName,
  //         email,
  //       });
  //     } else {
  //       let pop_status = localStorage.getItem('pop_status');
  //       if (!pop_status) {
  //         setShow(true);
  //         localStorage.setItem('pop_status', 1);
  //       }
  //     }
  //   });
  // }, [dispatch]);

  const closeModalHandler = () => {
    setShow(false);
  };

  const openModalHandler = () => {
    setShow(true);
  };

  return (
    <div>
      <Header openModal={openModalHandler}></Header>
      {show ? (
        <>
      {/* <div className="back-drop" onClick={closeModalHandler}></div> */}
      <Modal show={show} close={closeModalHandler} />
        </>
      ) : null}
      <Dashboard />

      <Footer />
    </div>
  );
}
