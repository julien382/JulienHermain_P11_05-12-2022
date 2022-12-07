import './Footer.css'
import Copyright from '../Copyright/Copyright'
import logoBlanc from '../../assets/logoBlanc.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            <Link to="/">
                <img className="logoBlanc" src={logoBlanc} alt="logo" />
            
            </Link>
            <Copyright title="© 2020 Kasa. All rights reserved"/>
            
        </footer>
    )
}

export default Footer