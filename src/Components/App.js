import '../styles/index.css';
import '../styles/reset.css';
import Header from './Header/Header'
import Card from './Card/Card'
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

function App() {
    return (
        <div>
            <div id='app'>
                <Header />
                <Banner />
                <Card />

            </div>
            <div>
                <Footer />

            </div>
        </div>
        
    )

}

export default App