import './FicheLogement.css'
import CardDescription from '../../Components/CardDescription/CardDescription'
import Tag from '../../Components/Tag/Tag'
import Rating from '../../Components/Rating/Rating'
import Slider from '../../Components/Slider/Slider'

const FicheLogement = () => {
    return (
        <div className='ficheLogement'>
            <Slider />
            <div className='containerLocationProfile'>
                <div className='containerLocation'>
                    <h2 className='locationName'>Cozy loft on the Canal Saint-Martin</h2>
                    <h3 className='location'>Paris, Île-de-France</h3>
                </div>
                <div className='profile'>
                    <h3 className='profileName'>Alexandre <br></br> Dumas</h3>
                    <div className='profilePicture'>
                        <img></img>
                    </div>
                </div>
            </div>
            <div className='containerTagRaiting'>
                <Tag />
                <Rating />

            </div>
            <div className='cardsDescription'>
                <CardDescription title="Description" text="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied)."/>
                <CardDescription title="Equipements" text="test"/>

            </div>
        </div>
    )
}

export default FicheLogement