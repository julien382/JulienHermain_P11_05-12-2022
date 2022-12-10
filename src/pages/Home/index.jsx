import Banner from '../../Components/Banner/Banner.jsx'
import Card from '../../Components/Card/Card.jsx'
import montagne from "../../assets/montagne.png"
import CardDescription from '../../Components/CardDescription/CardDescription.jsx'
import Tag from '../../Components/Tag/Tag.jsx'

const Home = () => {
    return (
        <div>
            <Banner img={montagne} title="Chez vous, partout et ailleurs"/>
            <Tag />
            <Card />
        </div>
    )
}

export default Home