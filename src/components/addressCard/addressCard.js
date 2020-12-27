import React from "react";
import PropTypes from "prop-types";

import './addressCard.scss';

const AddressCard = ({ details, isDummy }) => {
  return (
        <div className = {"addresscard " + (isDummy ? '' : 'isDummy')}>
          <div className="flex-card">
           {isDummy? null :<input type="radio" className="form__radio-input" name="address" />}
              <article className="address">
              <strong>{details.name}</strong>
              <br />
              <span className="addressDetails">{details.address}</span>
              <span className="addressDetails">{details.city}</span>
              <span className="addressDetails">{details.postal}</span>
              </article>
          </div>
      </div>
  );
};
AddressCard.propTypes = {
  isDummy: PropTypes.bool.isRequired
};
export default AddressCard;
