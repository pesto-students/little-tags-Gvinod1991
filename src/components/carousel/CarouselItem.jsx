import React from 'react';
import PropTypes from 'prop-types'
export default function CarouselItem({path,type,title}){
  return(
    <div className="carouselItem-container">
      <img  src={path} alt="carouselItem" />
      {type==='list' && 
        <div className="product-caption">
          <span>{title}</span>
        </div>
      }
    </div>
  )
}

CarouselItem.propTypes={
  path: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}