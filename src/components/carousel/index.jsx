import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './carousel.scss';
import CarouselItem from './CarouselItem';
const TRANSLATE_PERCENTAGE=100;

export default function Carousel({type,images,title}) {
  const sliderArray = images.map((image)=>{
    return <CarouselItem path={image} type={type} title={title} />
  });

  const [horizontalTranslate, setHorizontalTranslate] = useState(0);

  const goLeft = () => {
    if (horizontalTranslate === 0) {
      setHorizontalTranslate(-TRANSLATE_PERCENTAGE * (sliderArray.length - 1));
    } else {
      setHorizontalTranslate(horizontalTranslate + TRANSLATE_PERCENTAGE);
    }
  };

  const goRight = () => {
    if (horizontalTranslate === -((sliderArray.length - 1) * 100)) {
      setHorizontalTranslate(0);
    } else {
      setHorizontalTranslate(horizontalTranslate - TRANSLATE_PERCENTAGE);
    }
  };

  return (
    <div className="slider">
      {sliderArray.map((item) => {
        return (
          <div
            key={item}
            className={type==='stack' ? 'slide min-width-100' : 'slide min-width-45' }
            style={{ transform: `translate(${horizontalTranslate}%)` }}
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
  images:PropTypes.array.isRequired,
  title:PropTypes.string.isRequired
}