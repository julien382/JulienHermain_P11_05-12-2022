import './Tag.css'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'

const Tag = () => {
    const {id} = useParams()


    return (
        <div className='tags'>
            {data.map((logement) => (

            <>
            
                {(logement.id === id) && 

                    <>
                        {logement.tags.map((tag) => (
                            <div className='tag'>
                                <h3 className='tagTitle'>{tag}</h3>
                            </div>
                        ))}
                    </>
                }

            </>
            ))}
            
        </div>
    )
}

export default Tag