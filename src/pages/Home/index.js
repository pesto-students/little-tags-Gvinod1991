import React, {useState, useEffect} from 'react';
import Modal from "../../components/modal/Modal";
import { auth } from "../../services/firebase";
import Dashboard from'../../components/dashboard/Dashboard';
import ListDashboard from'../../components/list-dashboard/ListDashboard';
import Header from '../../components/layout/Header';
export default function Home(){
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
  const closeModalHandler = () => {
    setShow(false);
  };

  return(
    <div>
      <Header></Header>
      {show ? (
        <>
        {/* <div className="back-drop" onClick={closeModalHandler}></div> */}
        <Modal show={show} close={closeModalHandler} />
        </>
      ) : null}
     

      <Dashboard />
      <ListDashboard/>
    </div>
  )
}
