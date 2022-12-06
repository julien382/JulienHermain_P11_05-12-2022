import './Footer.css'
import Copyright from '../Copyright/Copyright'
import logoBlanc from '../../assets/logoBlanc.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img className="logoBlanc" src={logoBlanc} alt="logo" />
            <Copyright title="© 2020 Kasa. All rights reserved"/>
            
        </div>
    )
}

export default Footer