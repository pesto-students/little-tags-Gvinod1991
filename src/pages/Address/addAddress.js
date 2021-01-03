import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MainLayout from '../../components/layout/MainLayout';
import { saveUserDetails } from '../../redux/actions';
import './addAddress.scss';
import { states } from '../../utilities/states';
import { isEmailValid, isPhoneNumberValid } from '../../utilities/validations';
import Loader from '../../components/Loader';
const AddAddress = () => {
  const [addressInformation, setAddressInformation] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    phoneNumber: '',
    addressLineOne: '',
    addressLineTwo: '',
    state: '',
    pinCode: '',
  });
  const [firstNameErr, setFirstNameErr] = useState(null);
  const [lastNameErr, setLastNameErr] = useState(null);
  const [emailIdErr, setEmailIdErr] = useState(null);
  const [phoneNumberErr, setPhoneNumberErr] = useState(null);
  const [addressLineOneErr, setAddressLineOneErr] = useState(null);
  const [addressLineTwoErr, setAddressLineTwoErr] = useState(null);
  const [stateErr, setStateErr] = useState(null);
  const [pinCodeErr, setPinCodeErr] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { saved, loading, user} = useSelector((state) => {
    return {
      saved: state.userDetails.saved,
      loading: state.userDetails.loading,
      user: state.loginReducer.userDetails,
    };
  });
  const handleChange = ({ name, value }) => {
    setAddressInformation({
      ...addressInformation,
      [name]: value,
    });
  };
  const submitInformation = () => {
    let {
      firstName,
      lastName,
      emailId,
      phoneNumber,
      addressLineOne,
      addressLineTwo,
      state,
      pinCode,
    } = addressInformation;
    firstName = firstName !== '' ? firstName : false;
    lastName = lastName !== '' ? lastName : false;
    emailId = emailId !== '' && isEmailValid(emailId) ? emailId : false;
    phoneNumber =
      phoneNumber !== '' && isPhoneNumberValid(phoneNumber)
        ? phoneNumber
        : false;
    addressLineOne =
      addressLineOne && addressLineOne !== '' ? addressLineOne : false;
    addressLineTwo =
      addressLineTwo && addressLineTwo !== '' ? addressLineTwo : false;
    state = state && state !== '' ? state : false;
    pinCode = pinCode && pinCode !== '' ? pinCode : false;
    if (!firstName) {
      setFirstNameErr('First Name required!');
    } else {
      setFirstNameErr('');
    }
    if (!lastName) {
      setLastNameErr('Last Name required!');
    } else {
      setLastNameErr('');
    }
    if (!emailId) {
      setEmailIdErr('Email id required and should be valid!');
    } else {
      setEmailIdErr('');
    }
    if (!phoneNumber) {
      setPhoneNumberErr('Phone number required and should be valid!');
    } else {
      setPhoneNumberErr('');
    }
    if (!addressLineOne) {
      setAddressLineOneErr('Address line one required!');
    } else {
      setAddressLineOneErr('');
    }
    if (!addressLineTwo) {
      setAddressLineTwoErr('Address line two required!');
    } else {
      setAddressLineTwoErr('');
    }
    if (!state) {
      setStateErr('State is required!');
    } else {
      setStateErr('');
    }
    if (!pinCode) {
      setPinCodeErr('Pin code is required!');
    } else {
      setPinCodeErr('');
    }
    if (
      firstName &&
      lastName &&
      emailId &&
      phoneNumber &&
      addressLineOne &&
      addressLineTwo &&
      state &&
      pinCode
    ) {
      const data={
        ...addressInformation,
        userEmail:user.email
      }
      dispatch(saveUserDetails(data));
      setTimeout(() => {
        history.push('/address-list');
      }, 1000);
    }
  };

  return (
    <MainLayout>
      <div className="add-address-container">
        <div className="deliver"> Deliver To</div>
        <div className="columns">
          <div className="row">
            <div>
              <label>First Name</label>
            </div>
            <input
              value={addressInformation.firstName}
              onChange={(e) =>
                handleChange({ name: 'firstName', value: e.target.value })
              }
              type="text"
              className="input-class"
            />
            {firstNameErr && <p className="text-danger">{firstNameErr}</p>}
          </div>

          <div className="row">
            <div>
              <label>Last Name</label>
            </div>
            <input
              value={addressInformation.lastName}
              onChange={(e) =>
                handleChange({ name: 'lastName', value: e.target.value })
              }
              type="text"
              className="input-class"
            />
            {lastNameErr && <p className="text-danger">{lastNameErr}</p>}
          </div>

          <div className="row">
            <div>
              <label>Email ID</label>
            </div>
            <input
              value={addressInformation.emailId}
              onChange={(e) =>
                handleChange({ name: 'emailId', value: e.target.value })
              }
              type="text"
              className="input-class"
            />
            {emailIdErr && <p className="text-danger">{emailIdErr}</p>}
          </div>
          <div className="row">
            <div>
              <label>Phone Number</label>
            </div>
            <input
              value={addressInformation.phoneNumber}
              onChange={(e) =>
                handleChange({ name: 'phoneNumber', value: e.target.value })
              }
              type="number"
              className="input-class"
            />
            {phoneNumberErr && <p className="text-danger">{phoneNumberErr}</p>}
          </div>

          <div className="row">
            <div>
              <label>Address line 1</label>
            </div>
            <input
              value={addressInformation.addressLineOne}
              onChange={(e) =>
                handleChange({ name: 'addressLineOne', value: e.target.value })
              }
              type="text"
              className="input-class"
            />
            {addressLineOneErr && (
              <p className="text-danger">{addressLineOneErr}</p>
            )}
          </div>
          <div className="row">
            <div>
              <label>Address line 2</label>
            </div>
            <input
              value={addressInformation.addressLineTwo}
              onChange={(e) =>
                handleChange({ name: 'addressLineTwo', value: e.target.value })
              }
              type="text"
              className="input-class"
            />
            {addressLineTwoErr && (
              <p className="text-danger">{addressLineTwoErr}</p>
            )}
          </div>
          <div className="row">
            <div>
              <label>State</label>
            </div>
            <div className="select">
              <select
                name="slct"
                value={addressInformation.state}
                onChange={(e) =>
                  handleChange({ name: 'state', value: e.target.value })
                }
                className="slct"
              >
                <option value="">Choose an option</option>
                {states.map(({ name, key }) => (
                  <option key={key} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            {stateErr && <p className="text-danger">{stateErr}</p>}
          </div>
          <div className="row">
            <div>
              <label>Pin Code</label>
            </div>
            <input
              value={addressInformation.pinCode}
              onChange={(e) =>
                handleChange({ name: 'pinCode', value: e.target.value })
              }
              type="number"
              className="input-class"
            />
            {pinCodeErr && <p className="text-danger">{pinCodeErr}</p>}
          </div>
        </div>
        <button onClick={() => submitInformation()} className="btn">
          Save
        </button>
        {loading && <Loader />}
        {saved && (
          <p className="text-success text-center">
            Address information saved successfully
          </p>
        )}
      </div>
    </MainLayout>
  );
};

export default AddAddress;
