import './PP.css'

const PP = (logementGoodId) => {

    return (
        <div className='PP'>
            <div  className="ppImage">

                <img src={logementGoodId.idLogement.host.picture} alt="ppPicture" />
                
            </div>
        </div>
    )
}

export default PP