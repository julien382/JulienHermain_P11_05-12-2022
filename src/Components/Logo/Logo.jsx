import './Logo.scss'
import '../../styles/mediaQueries.css'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to="/">
            <img src={logo} alt='logo' className='logo' />
            
        </Link>
    )
}

export default Logo