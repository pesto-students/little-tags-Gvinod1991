import React from "react";
import PropTypes from "prop-types";

import './addressCard.scss';

const AddressCard = ({ details:{firstName,lastName,emailId,phoneNumber,addressLineOne,addressLineTwo,pinCode,state,id}, isDummy,handleAddressChange,userDetailsId }) => {
  return (
        <div className = {"addresscard " + (isDummy ? '' : 'isDummy')}>
          <div className="flex-card">
           <div className="row-box-address-card">
            {isDummy? null : <input type="radio" checked={id===userDetailsId? true : null} className="form__radio-input" name="address" onChange={()=>handleAddressChange(id)} />}
            <h2>{`${firstName} ${lastName}`}</h2>
           </div>
              <article className="address">
                <p className="addressDetails">{`${addressLineOne} ${addressLineTwo}`}</p>
                <p className="addressDetails">{state}</p>
                <p className="addressDetails">{pinCode}</p>
                <p></p>
                <p className="addressDetails">{phoneNumber}</p>
                <p className="addressDetails">{emailId}</p>
              </article>
          </div>
      </div>
  );
};
AddressCard.propTypes = {
  isDummy: PropTypes.bool.isRequired,
  details:PropTypes.object.isRequired,
  handleAddressChange:PropTypes.func.isRequired,
  userDetailsId:PropTypes.string.isRequired
};
export default AddressCard;
