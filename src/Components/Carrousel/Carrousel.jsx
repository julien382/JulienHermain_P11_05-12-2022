import React, { useState, useEffect } from 'react';
import './Carrousel.css';

const Carrousel = ({allPictures}) => {
  // Définir l'état local avec l'image actuellement affichée et le tableau d'images
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const length = allPictures.length

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
        newIndex = length - 1;
      }
      setActiveIndex(newIndex);
    }
  };

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      let newIndex = activeIndex + 1;
      if (newIndex >= length) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="carousel">
      {/* affichage des images */}
      {allPictures.map((image, index) => (
        <div
        key={image}
        className={`carousel-item ${index === activeIndex ? 'carousel-active' : ''} ${index < activeIndex ? 'prev' : ''} ${index > activeIndex ? 'next' : ''}`}
        onAnimationEnd={() => setIsAnimating(false)}
        >
          <img src={image} alt={`Logement ${index + 1}`} />
        </div>
      ))}
      {/* Si une seule image, ne pas afficher les boutons */}
      {length > 1 && (
        <>
        {/* les boutons next et prev*/}
          <span className="button-prev" onClick={handlePrevClick}>
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
            </svg>
          </span>
          <span className="button-next" onClick={handleNextClick}>
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
            </svg>
          </span>
        </>
      )}
      {/* le compteur*/}
      <span className='compteur'>
        {activeIndex + 1} / {length}
      </span>

    </div>
  );
}

export default Carrousel;

