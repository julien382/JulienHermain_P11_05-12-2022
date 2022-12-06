import './Banner.css'
import bannerImage from "../../assets/montagne.png"

const Banner = () => {
    return (
        <div className='banner'>
            <img src={bannerImage} alt='bannerImage' className='bannerImage' />
            <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner