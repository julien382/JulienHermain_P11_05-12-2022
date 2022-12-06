import '../styles/index.css';
import '../styles/reset.css';
import Banner from './Banner/Banner'
import Card from './Card/Card'
import SectionImage from './SectionImage/SectionImage';
import Footer from './Footer/Footer';

function App() {
    return (
        <div>
            <div id='app'>
                <Banner />
                <SectionImage />
                <Card />
                
            </div>
            <div>
                <Footer />

            </div>
        </div>
        
    )

}

export default App