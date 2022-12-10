import './Slider.css'
import '../../styles/mediaQueries.css'
import data from '../../data/data.json'

const Slider = () => {
    const url = window.location.href
    const finUrl = url.split('/').pop()

    return (
        <div className='Slider'>
            {data.map((logement) => (
                <div className="cardImage">
                    if ({logement.id} == {finUrl}) {
                        <img src={logement.pictures} alt="logement" />
                    }
                </div>
            ))}
        </div>
    )
}

export default Slider