import '../styles/index.css';
import '../styles/reset.css';
import Banner from './Banner/Banner'
import Card from './Card/Card'
import SectionImage from './SectionImage/SectionImage';

function App() {
    return (
        <div id='app'>
            <Banner />
            <SectionImage />
            <Card />
        </div>
    )

}

export default App