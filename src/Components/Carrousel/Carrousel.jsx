/*import React, { useState, useEffect } from 'react';
import './Carrousel.css';

const Carrousel = ({idLogement}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const images = idLogement

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      let newIndex = activeIndex - 1;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      }
      setActiveIndex(newIndex);
    }
  };

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      let newIndex = activeIndex + 1;
      if (newIndex >= images.length) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={image}
          className={`carousel-item ${index === activeIndex ? 'carousel-active' : ''}`}
          onAnimationEnd={() => setIsAnimating(false)}
        >
          <img src={image} alt={`Logement ${index + 1}`} />
        </div>
      ))}
      <button className="carousel-prev" onClick={handlePrevClick}>&#10094;</button>
      <button className="carousel-next" onClick={handleNextClick}>&#10095;</button>
    </div>
  );
}

export default Carrousel;*/

///////////////////////////////////////////////////////////////

/*
import React, { useState, useEffect } from 'react';
import './Carrousel.css';

const Carrousel = ({idLogement}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const images = idLogement

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      let newIndex = activeIndex - 1;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      }
      setActiveIndex(newIndex);
    }
  };

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      let newIndex = activeIndex + 1;
      if (newIndex >= images.length) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={image}
          className={`carousel-item ${index === activeIndex ? 'carousel-active' : ''} ${index < activeIndex ? 'carousel-prev' : ''} ${index > activeIndex ? 'carousel-next' : ''}`}
          onAnimationEnd={() => setIsAnimating(false)}
        >
          <img src={image} alt={`Logement ${index + 1}`} />
        </div>
      ))}
      <button className="carousel-prev" onClick={handlePrevClick}>&#10094;</button>
      <button className="carousel-next" onClick={handleNextClick}>&#10095;</button>
    </div>
  );
}

export default Carrousel;*/

import React, { useState, useEffect } from 'react';
import './Carrousel.css';

const Carrousel = ({idLogement}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const images = idLogement

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      let newIndex = activeIndex - 1;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      }
      setActiveIndex(newIndex);
    }
  };

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      let newIndex = activeIndex + 1;
      if (newIndex >= images.length) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
        key={image}
        className={`carousel-item ${index === activeIndex ? 'carousel-active' : ''} ${index < activeIndex ? 'carousel-prev' : ''} ${index > activeIndex ? 'carousel-next' : ''} ${index < activeIndex ? 'prev' : ''} ${index > activeIndex ? 'next' : ''}`}
        onAnimationEnd={() => setIsAnimating(false)}
        >
          <img src={image} alt={`Logement ${index + 1}`} />
        </div>
      ))}
      <button className="carousel-prev" onClick={handlePrevClick}>&#10094;</button>
      <button className="carousel-next" onClick={handleNextClick}>&#10095;</button>
      <span className='compteur'>
        {activeIndex + 1} / {images.length}
      </span>
    </div>
  );
}

export default Carrousel;

