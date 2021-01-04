import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import useSticky from '../hooks/useSticky';
import { useSelector } from 'react-redux';
import { logIn } from '../../redux/actions/loginAction';

export default function MainLayout({ children,source }) {
  const { isSticky, element } = useSticky();
  const { isLoggedIn } = useSelector((store) => ({
    isLoggedIn: store.loginReducer.isLoggedIn,
    userDetails:store.loginReducer.userDetails
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logIn());
  },[dispatch]);
  
  return(
    <div className="overflowAlign">
      <Header isLoggedIn={isLoggedIn} source={source} isSticky={isSticky} />
        {React.cloneElement(children, { element })}
      <Footer/>
    </div>
  );
}
