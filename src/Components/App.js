import '../styles/reset.css';
import '../styles/index.css';
import {Routes, Route} from "react-router-dom"

import Header from './Header/Header';

import Home from '../pages/Home/index';
import FicheLogement from '../pages/FicheLogement';
import APropos from '../pages/APropos/index';
import Error from '../pages/Error';

import Footer from './Footer/Footer';

function App() {
    return (
        <div>
            <div id='app'>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/FicheLogement/:id" element={<FicheLogement />} />
                    <Route path="/APropos" element={<APropos />} />
                    <Route path="/Error" element={<Error />} />
                    <Route path="*" element={<Error />} />
                </Routes>

            </div>
            <div>
                <Footer />

            </div>
        </div>
        
    )

}

export default App