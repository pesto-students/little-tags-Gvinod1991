import React from 'react';
import Header from './Header';
import Footer from './Footer';
import useSticky from '../hooks/useSticky';

export default function MainLayout({ children,source }) {
  const { isSticky, element } = useSticky();
  return(
    <div>
      <Header isLoggedIn={false} source={source} isSticky={isSticky} />
        {React.cloneElement(children, { element })}
      <Footer/>
    </div>
  );
}
