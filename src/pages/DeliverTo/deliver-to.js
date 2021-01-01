import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AddressCard from '../../components/addressCard/addressCard';
import MainLayout from '../../components/layout/MainLayout';
import Loader from '../../components/Loader';
import { getUserDetailList,saveUserDetailsId } from '../../redux/actions';
import './deliver-to.scss';
const DeliverTo = () => {
  const [errMessage,setErrMessage]=useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const { userDetailsList, loading, userDetailsId } = useSelector((state) => {
    return { userDetailsList: state.userDetails.userDetailsList, 
      loading:state.userDetails.loading,
      userDetailsId:state.userDetails.userDetailsId
    };
  });
  useEffect(() => {
    dispatch(getUserDetailList());
  }, [dispatch]);

  const redirectNewAddress = () => {
    history.push('/new-address');
  };
  const handleAddressChange =(id)=>{
    dispatch(saveUserDetailsId(id));
  }
  const checkout =()=>{
    if(userDetailsId){
      history.push('/checkout')
    }else{
      setErrMessage('Choose delivery address to checkout!');
    }
  }
  return (
    <MainLayout>
      <div className="deliver-to-container">
        <h2>Deliver To</h2>
        {loading && <Loader />}
        {userDetailsList &&
          userDetailsList.length > 0 &&
          userDetailsList.map((userDetails) => (
            <AddressCard key={userDetails.id} details={userDetails} isDummy={false} handleAddressChange={handleAddressChange}/>
          ))}
        <div className="row-box-deliver-to" onClick={redirectNewAddress}>
          <img src={'/add.svg'} alt="add new address" />
          <h5>Add New Address</h5>
        </div>
        <button className="btn" onClick={checkout}>
          <img src="/checkout.svg" alt="shopping cart icon" />
          <span>Checkout</span>
        </button>
        <p className="text-danger">{errMessage}</p>
      </div>
    </MainLayout>
  );
};

export default DeliverTo;
