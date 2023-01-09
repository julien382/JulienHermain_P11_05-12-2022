import './Slider.css'
import React, { useState } from 'react'


const Slider = ({idLogement}) => {

    // Définir l'état local avec l'image actuellement affichée et le tableau d'images
    const [currentPicture, setCurrentPicture] = useState(0)
    const [from, setFrom] = useState(null)

    const length = idLogement.length

    function nextSlide() {
        setCurrentPicture(currentPicture === length - 1 ? 0 : currentPicture + 1)
        setFrom('left')
    }

    function prevSlide() {
        setCurrentPicture(currentPicture === 0 ? length - 1 : currentPicture - 1)
        setFrom('right')
    }

    return (
        <div className='Slider'>
            
            {idLogement.map((picture, index) => (
                <div className={`slide ${index === currentPicture ? `active ${from}` : ""}`} key={index}> 
                    <img src={picture} alt="intèrieur du logement" className="slider__img" />    
                </div>
            ))}
            <span className='compteur'>
                {currentPicture + 1} / {length}
            </span>

            {length > 1 && (
                <>
                    <span className="slider__arrowLeft" onClick={prevSlide}>
                        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                        </svg>
                    </span>

                    <span className="slider__arrowRight" onClick={nextSlide}>
                        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                        </svg>
                    </span>
                </>
            )}
    
        </div>
    )
}

export default Slider