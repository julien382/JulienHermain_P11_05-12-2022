import './Banner.css'

const Banner = ({img, title, type}) => {

    return (
        <div className={type === "about" ? "banner bannerAbout" : "banner"}>
            <img src={img} alt='bannerImage' className='bannerImage' />
            <h1 className="bannerTitle">{title}</h1>
        </div>
    )
}

export default Banner