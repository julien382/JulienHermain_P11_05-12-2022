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
            <div className='card'>
                <CardTitle title="Paris"/>
                
            </div>
            <div className='card'>
                <CardTitle title="Londres"/>
                
            </div>
            <div className='card'>
                <CardTitle title="Tokyo"/>
                
            </div>
            <div className='card'>
                <CardTitle title="Madrid"/>
                
            </div>

        </div>
    )
}

export default Card