import './Rating.css'
import star from "../../assets/star.svg"
import starColor from "../../assets/starFull.svg"

const Rating = (nbrStars) => {

    const starEmpty = <img className='star' src={star} alt="Etoile vide" />;
    const starFull = <img className='star' src={starColor} alt="Etoile complete" />;
      
    const starsArray = [];

    for (let i = 0; i < 5; i++) {
        i < nbrStars.nbrStars ? starsArray.push(starFull) : starsArray.push(starEmpty);
    }

    return (
        <div className="rate">
            <span>{starsArray}</span>
        </div>
    )
}

export default Rating