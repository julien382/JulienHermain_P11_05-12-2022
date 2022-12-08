import './Card.css'
import '../../styles/mediaQueries.css'
import CardTitle from "../CardTitle/CardTitle"
import data from '../../data/data.json'

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
                {data.map(logement => (
                    <CardTitle title={logement.title}/>
                ))}
                
            </div>

        </div>
    )
}

export default Card