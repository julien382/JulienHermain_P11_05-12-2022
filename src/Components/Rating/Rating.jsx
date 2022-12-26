import './Rating.css'
import Star from "../Star/Star"

const Rating = (nbrStars) => {
      
    const starsArray = [];

    for (let i = 0; i < 5; i++) {
        i < nbrStars.nbrStars ? starsArray.push(<Star key={i}/>) : starsArray.push(<Star key={i} isEmpty/>);
    }

    return (
        <div className="rate">
            <span>{starsArray}</span>
        </div>
    )
}

export default Rating