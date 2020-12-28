import React from "react";
import PropTypes from "prop-types";

import './card.scss';

const Card = ({ pathname, title }) => {

  return (
    <>
        <div className="card-display" >
            <img  src={pathname} alt={title} className="card-image"/>
            <div className="textInCard">
                {title}
            </div>
        </div>
    </>
  );
};
Card.propTypes = {
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string,
};
export default Card;
