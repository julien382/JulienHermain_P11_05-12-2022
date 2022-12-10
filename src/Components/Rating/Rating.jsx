import './Rating.css'
import '../../styles/mediaQueries.css'
import star from "../../assets/star.svg"

const Rating = () => {
    return (
        <div className='rating'>
            <img src={star} alt='star' className='star' />
            <img src={star} alt='star' className='star' />
            <img src={star} alt='star' className='star' />
            <img src={star} alt='star' className='star' />
            <img src={star} alt='star' className='star' />
        </div>
    )
}

export default Rating