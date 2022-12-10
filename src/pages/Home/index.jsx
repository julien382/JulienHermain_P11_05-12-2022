import Banner from '../../Components/Banner/Banner.jsx'
import Card from '../../Components/Card/Card.jsx'
import montagne from "../../assets/montagne.png"

const Home = () => {
    return (
        <div>
            <Banner img={montagne} title="Chez vous, partout et ailleurs"/>
            <Card />
        </div>
    )
}

export default Home