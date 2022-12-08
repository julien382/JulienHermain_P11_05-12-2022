import './NavBar.css'
import '../../styles/mediaQueries.css'
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className='navBar'>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/APropos">A Propos</Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default NavBar