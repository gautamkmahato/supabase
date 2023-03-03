import { useNavigate } from 'react-router-dom'
import '../style/card.css'

function Card(props) {
    const navigate =useNavigate();
    return (  
        <>
        <div className="card skeleton" style={{ backgroundImage: 'url("' + props.img + '")' }}>
            <div className="card-content">
                <h3>{props.title}</h3>
                <div className='card-data'>
                    <p>Questions <span style={{fontWeight: '600'}}>30</span></p>
                    <button onClick={()=>navigate(`${props.link}/${props.subcategory}`)}>Start Learning</button>
                </div>
            </div>
        </div>
        {/* <div className="card skeleton">
            <div className="card-content skeleton">
                <h3 className='skeleton'></h3>
                <div className='card-data skeleton'>
                    <p className='skeleton'></p>
                    <button className='skeleton'></button>
                </div>
            </div>
        </div> */}
        </>  
    )
}

export default Card