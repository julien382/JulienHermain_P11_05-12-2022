import './Logo.css'
import logo from "../../assets/logo.png"

const Logo = () => {
    return (
        <a className='logo' href="logo">
            <img src={logo} alt='logo' className='logo' />
            
        </a>
    )
}

export default Logo