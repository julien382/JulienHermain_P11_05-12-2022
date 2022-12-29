import './CardDescription.css'
import arrow from "../../assets/arrow.svg"
import { useState } from 'react'

const CardDescription = ({title, text, type}) => {

    const [isOpen, setIsOpen] = useState(false)  

    const handleClick =
     () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className='cardDescription'>
            <div className='blocCardDescriptionTitle'>
                <h2 className='cardDescriptionTitle'>{title}</h2>
                <img className={isOpen ? "arrow rotateArrow" : "arrow" } onClick={handleClick} src={arrow} alt='arrow'></img>
            </div>

            {isOpen &&
            
                <div className='blocCardDescriptionTexte'>
                        {type === "Paragraphe" ? <p className='cardDescriptionTexte'>{text}</p> :
                            <ul>
                                {text.map((item, i) => (
                                    <li className='cardDescriptionTexte' key={i}>{item}</li>
                                ))}
                            </ul>
                        }
                </div>

            }

        </div>
    )
}

export default CardDescription