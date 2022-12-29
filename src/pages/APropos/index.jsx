import './APropos.css'
import Banner from '../../Components/Banner/Banner.jsx'
import montagneNeige from "../../assets/montagneNeige.png"
import CardDescription from '../../Components/CardDescription/CardDescription'
import aboutData from '../../data/aboutData.json'

const APropos = () => {

    document.title = "Kasa - A Propos"
    
    return (
        <div className='pageAPropos'>
            <Banner type="about" img={montagneNeige}/>

            <div className='aProposCardsDescription'> 

                {aboutData.map((dataDescription, i) => (

                    <CardDescription type="Paragraphe" key={i} title={dataDescription.title} text={dataDescription.text}/>

                ))}
            </div>
            
        </div>
    )
}

export default APropos