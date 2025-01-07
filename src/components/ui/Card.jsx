import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const Card = ({ id, cardType, url }) => {

  const navigate = useNavigate();
  const param = useParams();

  const onClickNavigation = () => {
    navigate(`/project/${id}`);
  }

  const onRepoNavigate = () => {
    window.location.href= url;
  }

  return (
    <div className='col-12 col-md-12 col-lg-4 mt-4 card-dimension'>
      <div className='card card-style shadow'>
        {
          ( cardType === 'company') ? 
          <img 
            src={ `assets/images/${id}.png` } 
            alt='companies and projects' 
            className='card-image-top' 
            style={{ height: '100%'}} 
            onClick={ onClickNavigation }
          /> 
          :
          <img 
            src={ `assets/images/${id}.png` } 
            alt='companies and projects' 
            className='card-image-top' 
            style={{ height: '100%'}} 
            onClick={ onRepoNavigate }
          /> 
        }
      </div>
    </div>

  )
}
