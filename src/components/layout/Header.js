import React, { useEffect, useState,useRef } from 'react';
import './layout.scss';
import HamBurgerMenu from './HamBurgerMenu';
import LoginAction from '../loginAction';
import SearchBar from '../searchBar';
import Brand from '../brand';
import AuthUserDisplay from '../autUserDisplay';
import HeaderCart from '../headerCart';
import Modal from '../../components/modal/Modal';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { isUserVisitingForTheFirstTime } from '../../redux/actions/loginAction';

export default function Header({ isLoggedIn,source='non-home',isSticky, numberOfItemsInCart}) {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [firstTimeVisit, setFirstTimeVisit] = useState(false);
  const node= useRef();
  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const closeLoginModal = () => {
    setFirstTimeVisit(false);
    setShow(false);
  };

  const openLoginModal = () => {
    setShow(true);
    
  };
  useEffect(() => {
    setFirstTimeVisit(isUserVisitingForTheFirstTime() ? true : show);
  }, [show]);

  useOnClickOutside(node, () => setShowHamburgerMenu(false));
  return (
    <div ref={node}>
      <div  className={source==='home' && !isSticky ? "header header-fixed" : source==='home' && isSticky ? "header header-fixed header-dark" : "header"}>
        <Brand
          toggleHamburgerMenu={toggleHamburgerMenu}
          isLoggedIn={isLoggedIn}
          source={source}
          isSticky={isSticky}
        />
        <SearchBar />
        {isLoggedIn ? (
          <AuthUserDisplay parent={"header"} source={source} isSticky={isSticky} />
        ) : (
          <LoginAction openModalHandler={openLoginModal} source={source} isSticky={isSticky} />
        )}
        {isLoggedIn ? <HeaderCart isSticky={isSticky} source={source} numberOfItemsInCart={numberOfItemsInCart}/> : null}
      </div>
        <HamBurgerMenu
          toggleHamburgerMenu={toggleHamburgerMenu}
          showHamburgerMenu={showHamburgerMenu}
          isLoggedIn={isLoggedIn}
          isSticky={isSticky}
        />
      {(firstTimeVisit ? true : show) ? (
        <>
          <Modal show={firstTimeVisit ? true : show} close={closeLoginModal} />
        </>
      ) : null}
    </div>
  );
}
