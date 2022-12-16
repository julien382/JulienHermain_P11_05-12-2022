import './Slider.css'
import '../../styles/mediaQueries.css'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'

const Slider = () => {
    const {id} = useParams()

    return (
        <div className='Slider'>
            <div  className="sliderImage">
                {data.map((logement) => (

                    <>

                    {(logement.id === id) && 

                        <>
                        {logement.pictures.map((picture) => (

                            <img key={logement.id} src={picture} alt="sliderPicture" />

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