import './CardDescription.css'
import '../../styles/mediaQueries.css'
import arrow from "../../assets/arrow.svg"

const CardDescription = ({title, text}) => {
    return (
        <div className='cardDescription'>
            <div className='blocCardDescriptionTitle'>
                <h2 className='cardDescriptionTitle'>{title}</h2>

                <div className='blocCardDescriptionTexte'>
                    <p className='cardDescriptionTexte'>{text}</p>
                </div>
                <img src={arrow} alt='arrow'></img>
            </div>
        </div>
    )
}

export default CardDescription