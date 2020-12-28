import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './carousel.scss';
import CarouselItem from './CarouselItem';
export default function Carousel({type,images}) {
  const sliderArray = images.map((image)=>{
    return <CarouselItem path={image} type={type} />
  });
  const [x, setX] = useState(0);
  const goLeft = () => {
    if (x === 0) {
      setX(-100 * (sliderArray.length - 1));
    } else {
      setX(x + 100);
    }
  };
  const goRight = () => {
    if (x === -((sliderArray.length - 1) * 100)) {
      setX(0);
    } else {
      setX(x - 100);
    }
  };
  return (
    <div className="slider">
      {sliderArray.map((item, index) => {
        return (
          <div
            key={index}
            className={type==='stack' ? 'slide min-width-100' : 'slide min-width-45' }
            style={{ transform: `translate(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="left-arrow" className={type === 'stack' ? 'lg' :'sm'} onClick={goLeft}>
        <img src="/left-arrow.svg" alt="left"/>
      </button>
      <button id="right-arrow" className={type === 'stack' ? 'lg' :'sm'} onClick={goRight}>
        <img src="/right-arrow.svg"  alt="right" />
      </button>
    </div>
  );
}

Carousel.propTypes={
  type:PropTypes.string.isRequired,
  images:PropTypes.array.isRequired
}