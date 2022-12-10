import './CardDescription.css'
import '../../styles/mediaQueries.css'
import arrow from "../../assets/arrow.svg"

const CardDescription = () => {
    return (
        <div className='cardDescription'>
            <div className='blocCardDescriptionTitle'>
                <h2 className='cardDescriptionTitle'>Description</h2>

                <div className='blocCardDescriptionTexte'>
                    <p className='cardDescriptionTexte'>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </p>
                </div>
                <img src={arrow} alt='arrow'></img>
            </div>
        </div>
    )
}

export default CardDescription