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
/*
<Link className='card' to={`FicheLogement/${logement.id}`}>
                    <article>
                        <div className="cardImage">
                            <img src={logement.cover} alt="logement" />
                        </div>
                        <h2 className='cardTitle'>{logement.title}</h2>
                    </article>
                </Link>*/

export default Slider