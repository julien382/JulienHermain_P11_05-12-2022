import './FicheLogement.css'
import CardDescription from '../../Components/CardDescription/CardDescription'
import Tag from '../../Components/Tag/Tag'
import Rating from '../../Components/Rating/Rating'
import Slider from '../../Components/Slider/Slider'
import Carrousel from '../../Components/Carrousel/Carrousel'
import PP from '../../Components/PP/PP'
import data from '../../data/data.json'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const FicheLogement = () => {
    const {id} = useParams()

    const navigate = useNavigate();

    useEffect(() => {
        // si l'id n'ai pas trouvé, page error
        if (data.find(logement => logement.id === id) === undefined){
            navigate('/Error');
        } 
    }, [id, navigate])
    
    const logementGoodId = data.find(logement => logement.id === id)
    
    if (logementGoodId === undefined) {
        return null
    }

    // document title
    document.title += " - " + logementGoodId?.title 

    //split Name
    const formatName = (name) => {
        const words = name.split(" ");
        const items = words.map((word, i) => <div key={i}>{word}</div>);

        return items
    }
    
    
    return (
        <div className='ficheLogement'>

            <Slider idLogement={logementGoodId.pictures} allPictures={logementGoodId.pictures}/>
            <div className='containerInformation'>    
                <div className='containerLocationTag'>
                    <div className='containerLocation'>
                        <h2 className='locationName'>{logementGoodId.title}</h2>
                        <h3 className='location'>{logementGoodId.location}</h3>
                    </div>
                    <Tag idLogement={logementGoodId}/>
                </div>
                <div className='containerProfileRaiting'>
                    <div className='profile'>
                        <h3 className='profileName' alt="pictures">{formatName(logementGoodId.host.name)}</h3>
                        <PP idLogement={logementGoodId}/>
                    </div>
                    <Rating nbrStars={logementGoodId.rating}/>
                </div>
            </div>
            <div className='cardsDescription'>
                <CardDescription type="Paragraphe" title="Description" text={logementGoodId.description}/>
                <CardDescription type="Liste"title="Equipements" text={logementGoodId.equipments}/>
            </div>
            <Carrousel idLogement={logementGoodId.pictures}/>
                
        </div>
    )
}

export default FicheLogement