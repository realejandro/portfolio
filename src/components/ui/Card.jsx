import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, companyName, description }) => {

  return (

    <div className='card m-2' style={ {width : "18rem"} }>
        <img src={ `assert/images/${id}.png` } alt='majdjjsjosd' className='card-image-top'/>
        <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title"> { companyName }</h5>
            <p className="card-text"> { description }</p>
            <Link href="#" className="btn btn-dark" to={`project/${id}`}> Check It Out </Link>
        </div>

    </div>

  )
}

export default Card