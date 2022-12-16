import './Slider.css'
import '../../styles/mediaQueries.css'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'

const Slider = () => {
    const {id} = useParams()

    return (
        <div className='Slider'>
            <div  className="cardImage">
                {data.map((logement, i) => (

                    <>

                    {(logement.id === id) && 

                        <>
                        {logement.pictures.map((picture, id) => (

                            <img key={id} src={picture} alt="pictures" />

                        ))}
                        
                        </>

                    }
                    
                    </>

                ))}
            </div>
        </div>
    )
}

export default Slider