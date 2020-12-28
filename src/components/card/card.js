import React from "react";
import PropTypes from "prop-types";

import './card.scss';
import { NavLink } from "react-router-dom";

const Card = ({ pathname, title, id , category}) => {

const Card = ({ pathname, title }) => {

  return (
    <>
    <NavLink to={'/products/' + category} key={id}>
        <div className="card-display" >
            <img  src={pathname} alt={title} className="card-image"/>
            <div className="textInCard">
                {title}
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
