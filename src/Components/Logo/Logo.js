import './Logo.css'
import logo from "../../assets/logo.png"

const Logo = () => {
    return (
        <a className='logo'>
            <img src={logo} alt='Feuille' className='logo' />
            
        </a>
    )
}

export default Logo