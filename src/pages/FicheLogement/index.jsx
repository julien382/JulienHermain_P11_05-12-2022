import './FicheLogement.css'
import CardDescription from '../../Components/CardDescription/CardDescription'
import Tag from '../../Components/Tag/Tag'
import Rating from '../../Components/Rating/Rating'
import Slider from '../../Components/Slider/Slider'
import PP from '../../Components/PP/PP'
import data from '../../data/data.json'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

const FicheLogement = () => {
    const {id} = useParams()
    const [logement, setLogement] = useState(undefined)
    const navigate = useNavigate()
    
    useEffect(() => {

        // si l'id n'ai pas trouvé, page error
        if (data.find(logement => logement.id === id) === undefined){
            console.log("bad");
            navigate('/Error', { replace: true })
            return
        }
        setLogement(data.find(logement => logement.id === id))

        //titlePage
        document.title += " - " + logement.title 
    }, [id, logement])
    
    
    //split Name
    const formatName = (name) => {
        const items = name.split(' ')
        items.splice(1, 0, <br/>)
        return items
    }
    
    
    return (
        <div className='ficheLogement'>

            <Slider idLogement={logement.pictures} allPictures={logement.pictures}/>

            <div className='containerInformation'>    
                <div className='containerLocationTag'>
                    <div className='containerLocation'>
                        <h2 className='locationName'>{logement.title}</h2>
                        <h3 className='location'>{logement.location}</h3>
                    </div>
                    <Tag idLogement={logement}/>
                </div>
                <div className='containerProfileRaiting'>
                    <div className='profile'>
                        <h3 className='profileName' alt="pictures">{formatName(logement.host.name)}</h3>
                        <PP idLogement={logement}/>
                    </div>
                    <Rating nbrStars={logement.rating}/>
                </div>
            </div>
            <div className='cardsDescription'>
                <CardDescription type="Paragraphe" title="Description" text={logement.description}/>
                <CardDescription type="Liste"title="Equipements" text={logement.equipments}/>
            </div>
                
        </div>
    )
}

export default FicheLogement