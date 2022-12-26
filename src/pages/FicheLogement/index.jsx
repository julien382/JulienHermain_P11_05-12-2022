import './FicheLogement.css'
import CardDescription from '../../Components/CardDescription/CardDescription'
import Tag from '../../Components/Tag/Tag'
import Rating from '../../Components/Rating/Rating'
import Slider from '../../Components/Slider/Slider'
import PP from '../../Components/PP/PP'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'


const FicheLogement = () => {
    const {id} = useParams()

    const logGoodId = data.find(logement => logement.id === id)


    return (
        <div className='ficheLogement'>

            <Slider idLogement={logGoodId.pictures} allPictures={logGoodId.pictures}/>

            <div className='containerInformation'>    
                <div className='containerLocationTag'>
                    <div className='containerLocation'>
                        <h2 className='locationName'>{logGoodId.title}</h2>
                        <h3 className='location'>{logGoodId.location}</h3>
                    </div>
                    <Tag />
                </div>
                <div className='containerProfileRaiting'>
                    <div className='profile'>
                        <h3 className='profileName' alt="pictures">{logGoodId.host.name}</h3>
                        <PP />
                    </div>
                    <Rating nbrStars={logGoodId.rating}/>
                </div>
            </div>
            <div className='cardsDescription'>
                <CardDescription title="Description" text={logGoodId.description}/>
                <CardDescription title="Equipements" text={logGoodId.equipments}/>
            </div>
                
        </div>
    )
}

export default FicheLogement