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


    return (
        <div className='ficheLogement'>

            {data.map((logement, i) => (

            <>

            {(logement.id === id) && 

                <>
                    <Slider />
                    
                    <div className='containerLocationProfile'>
                        <div className='containerLocation'>
                            <h2 className='locationName'>{logement.title}</h2>
                            <h3 className='location'>{logement.location}</h3>
                        </div>
                        <div className='profile'>
                            <h3 className='profileName' key={i}  alt="pictures">{logement.host.name}</h3>
                            <PP />
                        </div>
                    </div>
                    <div className='containerTagRaiting'>
                        <Tag />
                        <Rating />

                    </div>
                    <div className='cardsDescription'>
                        <CardDescription title="Description" text={logement.description}/>
                        <CardDescription title="Equipements" text={logement.equipments}/>

                    </div>
                </>

            }

            </>

            ))}
                
        </div>
    )
}

export default FicheLogement