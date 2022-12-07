import './Menu.css'
import {Link} from "react-router-dom"

const Menu = () => {
    return (
        <nav className='menu'>
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

export default Menu