import './PP.css'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'

const PP = () => {
    const {id} = useParams()


    return (
        <div className='PP'>
            <div  className="ppImage">
                {data.map((logement, i) => (

                    <>

                    {(logement.id === id) && 

                        <img key={i} src={logement.host.picture} alt="ppPicture" />

                    }
                    
                    </>

                ))}
            </div>
        </div>
    )
}

export default PP