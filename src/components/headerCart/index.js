import React , {useEffect }from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { getCartCount } from '../../redux/actions/cartDetails';
import './header-cart.scss';

export default function HeaderCart({isSticky,source}){

  const { cartCount} = useSelector((store) => ({
    cartCount: store.cartDetails.count
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartCount());
  }, [dispatch]);


  return(
    <div className="header-cart-container">
      <Link to="/cart">
      <img src={source==='home' && !isSticky ? "/shopping-cart.svg" : "/shopping-cart-black.svg"} alt="shopping cart icon" />
      <span className='badge badge-warning lblCartCount'> {cartCount} </span>
      </Link>
    </div>
  )
}