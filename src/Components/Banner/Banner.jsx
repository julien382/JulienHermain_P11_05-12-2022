import './Banner.css'
import '../../styles/mediaQueries.css'

const Banner = ({img, title}) => {
    return (
        <div className='banner'>
            <img src={img} alt='bannerImage' className='bannerImage' />
            <h1 className="bannerTitle">{title}</h1>
        </div>
    )
}

export default Banner