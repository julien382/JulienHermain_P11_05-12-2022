import './Slider.css'
import '../../styles/mediaQueries.css'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'

const Slider = () => {
    const {id} = useParams()
    console.log(id);

    return (
        <div className='Slider'>
            {data.map((logement, i) => (
                <div key={i} className="cardImage">

                    {(logement.id === id) && 
                        <img src={logement.pictures} alt="logement" />
                    }

                </div>
            ))}
        </div>
    )
}

export default Slider