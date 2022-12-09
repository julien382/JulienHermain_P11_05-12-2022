import './Card.css'
import '../../styles/mediaQueries.css'
import data from '../../data/data.json'
import {Link} from "react-router-dom"

const Card = () => {
    return (
        <div className='cards'>
            {data.map((logement) => (
                <Link className='card' to={`FicheLogement/${logement.id}`}>
                    <article className="cardImage">
                        <img src={logement.cover} alt="logement" />
                        <h2 className='cardTitle'>{logement.title}</h2>
                    </article>
                </Link>
            ))}
            
        </div>
    )
}

export default Card