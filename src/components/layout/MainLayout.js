import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import useSticky from '../hooks/useSticky';
import { AppContext } from '../../redux/store';

export default function MainLayout({ children,source }) {
  const { isSticky, element } = useSticky();
  const {state} = useContext(AppContext);
  const isLoggedIn = state? state.isLoggedIn: false;
  return(
    <div>
      <Header isLoggedIn={isLoggedIn} source={source} isSticky={isSticky} />
        {React.cloneElement(children, { element })}
      <Footer/>
    </div>
  );
}
