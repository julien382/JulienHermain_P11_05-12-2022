import './Tag.css'

const Tag = ({idLogement}) => {

    return (
        <div className='tags'>

            {idLogement.tags.map((tag, i) => (
                <div key={i} className='tag'>
                    <h3 className='tagTitle'>{tag}</h3>
                </div>
            ))}

        </div>
    )
}

export default Tag