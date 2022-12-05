import './Card.css'
import CardTitle from "../CardTitle/CardTitle"

const Card = () => {
    return (
        <div className='cards'>
            <div className='card'>
                <CardTitle title="Titre de la location"/>
                
            </div>
            <div className='card'>
                <CardTitle title="Bruxelles"/>
                
            </div>

        </div>
    )
}

export default Card