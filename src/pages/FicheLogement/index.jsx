import './FicheLogement.css'
import CardDescription from '../../Components/CardDescription/CardDescription'

const FicheLogement = () => {
    return (
        <div className='ficheLogement'>
            <div className='cardsDescription'>
                <CardDescription title="Description" text="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied)."/>
                <CardDescription title="Equipements" text="test"/>

            </div>
        </div>
    )
}

export default FicheLogement