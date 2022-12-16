import './APropos.css'
import Banner from '../../Components/Banner/Banner.jsx'
import montagneNeige from "../../assets/montagneNeige.png"
import CardDescription from '../../Components/CardDescription/CardDescription'

const APropos = () => {
    return (
        <div className='pageAPropos'>
            <Banner img={montagneNeige}/>

            <div className='aProposCardsDescription'> 
                <CardDescription title="Equipements" text="test"/>
                <CardDescription title="Equipements" text="test"/>
            </div>
            
        </div>
    )
}

export default APropos