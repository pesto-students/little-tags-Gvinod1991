import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from '../../components/dashboard/Dashboard';
import MainLayout from '../../components/layout/MainLayout';
import Toast from '../../components/toast';
import { isNewlyLoggedIn, logIn } from '../../redux/actions/loginAction';
import capitalize from '../../services/capitalize';

const SOURCE='home';

export default function Home() {
  const {userDetails } = useSelector((store) => ({
    isLoggedIn: store.loginReducer.isLoggedIn,
    userDetails: store.loginReducer.userDetails,
  }));
  const dispatch = useDispatch();
  const toastProperties = {
    id: 1,
    title: "Success",
    description:
       userDetails && userDetails.displayName
        ? "You are logged in as " + capitalize(userDetails.displayName.split(" ")[0]) + "."
        : "",
    backgroundColor: "#5cb85c",
    login: true
  };
  useEffect(() => {
    dispatch(logIn());
  },[dispatch]);



  return (
    <>
    <MainLayout source={SOURCE}>
      <Dashboard />
    </MainLayout>
    {isNewlyLoggedIn() && (
        <Toast
          toastList={[toastProperties]}
          autoDelete={false}
          autoDeleteTime={1000}
        />
      )}
    </>
    
  );
}
