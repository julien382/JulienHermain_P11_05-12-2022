import '../styles/index.css';
import '../styles/reset.css';
import Footer from './Footer/Footer';
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home/index';
import APropos from '../pages/APropos/index';
import Header from './Header/Header';

function App() {
    return (
        <div>
            <div id='app'>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/FicheLogement" element={<FicheLogement />} />
                    <Route path="/Error" element={<Error />} />*/}
                    <Route path="/APropos" element={<APropos />} />
                </Routes>

            </div>
            <div>
                <Footer />

            </div>
        </div>
        
    )

}

export default App