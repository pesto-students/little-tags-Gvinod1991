import React from 'react';
import PropTypes from 'prop-types'
export default function carouselItem({path}){
  return(
    <div className="carouselItem-container">
      <img  src={path} />
    </div>
  )
}

carouselItem.propTypes={
  path: PropTypes.string.isRequired,
}