import React from 'react';
import PropTypes from 'prop-types';
export default function CarouselItem({
  path,
  type,
  title,
  handleCarouselItemClick,
  id,
}) {
  return (
    <div
      className="carouselItem-container"
      onClick={() => (id ? handleCarouselItemClick(id) : {})}
    >
      <img src={path} alt="carouselItem" />
      {type === 'list' && (
        <div className="product-caption">
          <span>{title}</span>
        </div>
      )}
    </div>
  );
}

CarouselItem.propTypes = {
  path: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
