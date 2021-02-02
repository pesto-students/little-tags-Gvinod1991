import React from "react";
import PropTypes from "prop-types";

import './card.scss';
import { NavLink } from "react-router-dom";

const Card = ({ pathname, title, id , category , imageClass, divclass}) => {

  return (
    <>
      <NavLink to={'/products/' + category} key={id}>
        <div className={ "card-display " +divclass } >
          <img  src={pathname} alt={title} className={"card-image " +imageClass}/>
          <div className="textInCard">
              <span>{title}</span>
          </div>
        </div>
      </NavLink>
    </>
  );
};
Card.propTypes = {
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string,
};
export default Card;
