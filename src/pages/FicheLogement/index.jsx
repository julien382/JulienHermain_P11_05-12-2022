import './FicheLogement.css'
import CardDescription from '../../Components/CardDescription/CardDescription'

const FicheLogement = () => {
    return (
        <div className='ficheLogement'>
            <div className='cardsDescription'>
                <CardDescription />
                <CardDescription />
            </div>
        </div>
    )
}

export default FicheLogement