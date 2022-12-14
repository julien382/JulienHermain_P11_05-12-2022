import './CardDescription.css'
import '../../styles/mediaQueries.css'
import arrow from "../../assets/arrow.svg"
import { useState } from 'react'

const CardDescription = ({title, text}) => {

    const [isOpen, setIsOpen] = useState(false)  

    const handleClick = () => {
        setIsOpen(!isOpen)
    }



    return (
        <div className='cardDescription'>
            <div className='blocCardDescriptionTitle'>
                <h2 className='cardDescriptionTitle'>{title}</h2>

                {isOpen &&
                
                    <div className='blocCardDescriptionTexte'>
                        <p className='cardDescriptionTexte'>{text}</p>
                    </div>

                }

                <img className={isOpen ? "arrow rotateArrow" : "arrow" } onClick={handleClick} src={arrow} alt='arrow'></img>

            </div>
        </div>
    )
}

export default CardDescription