import './Slider.css'
import '../../styles/mediaQueries.css'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'

const Slider = () => {
    const {id} = useParams()
    console.log(id);

    return (
        <div className='Slider'>
            <div  className="cardImage">
                {data.map((logement, i) => (

                    <>

                    {(logement.id === id) && 

                        <img key={i} src={logement.host.picture} alt="logement" />

                    }
                    {console.log(logement.id)}
                    
                    </>

                ))}
            </div>
        </div>
    )
}

export default Slider