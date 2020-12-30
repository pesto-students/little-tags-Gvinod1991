import React from 'react';
import Header from './Header';
import Footer from './Footer';
import useSticky from '../hooks/useSticky';
import { useSelector } from 'react-redux';

export default function MainLayout({ children,source }) {
  const { isSticky, element } = useSticky();
  const { isLoggedIn } = useSelector((store) => ({
    isLoggedIn: store.loginReducer.isLoggedIn,
    userDetails:store.loginReducer.userDetails
  }));

  return(
    <div>
      <Header isLoggedIn={isLoggedIn} source={source} isSticky={isSticky} />
        {React.cloneElement(children, { element })}
      <Footer/>
    </div>
  );
}
