import star from "../../assets/star.svg"
import starColor from "../../assets/starFull.svg"
import './Star.css'

const Star = ({isEmpty}) => {

    return (

        <img 
            className={isEmpty ? "star" : "starFull"} 
            src={isEmpty ? star : starColor} 
            alt={isEmpty ? "Etoile vide" : "Etoile complete"}
        />
    )

}
export default Star