import './NavBar.css'
import {NavLink} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className='navBar'>
            <ul>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'active' : '')} 
                        to="/">Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'active' : '')} 
                        to="/APropos">A Propos
                    </NavLink>
                </li>
            </ul>
            
        </nav>
    )
}

export default NavBar