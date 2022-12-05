import './Logo.css'
import logo from "../../assets/logo.png"

const Logo = () => {
    return (
        <a className='logo' href="logoKasa">
            <img src={logo} alt='logoKasa' className='logo' />
            
        </a>
    )
}

export default Logo