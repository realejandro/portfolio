import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Card = ({ id, title, description }) => {

  const navigate = useNavigate();
  const param = useParams();

  const onClickNavigation = () => {
    navigate(`/project/${id}`);
  }


  return (
    <div className='col-12 col-md-12 col-lg-4 mt-4 card-dimension'>
      <div className='card card-style shadow'>
          <img src={ `assets/images/${id}.png` } alt='companies' className='card-image-top' style={{ height: '100%'}} onClick={ onClickNavigation }/>
      </div>
    </div>

  )
}

export default Card