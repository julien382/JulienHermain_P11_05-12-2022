import './PP.css'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'

const PP = () => {
    const {id} = useParams()


    return (
        <div className='PP'>
            <div  className="ppImage">
                {data.map((ppPicture, i) => (

                    <>

                    {(ppPicture.id === id) && 

                        <img key={i} src={ppPicture.host.picture} alt="ppPicture" />

                    }
                    
                    </>

                ))}
            </div>
        </div>
    )
}

export default PP