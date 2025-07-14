
import { Link, useNavigate, useParams } from 'react-router-dom';

export const Card = ({ id, cardType, url, title, description }) => {

  const navigate = useNavigate();
  const param = useParams();

  const onClickNavigation = () => {
    navigate(`/project/${id}`);
  }

  return (
    <div className='col-12 col-md-12 col-lg-4 mt-4'>
      <div className='card card-style shadow'> 
          <img 
            src={ `assets/images/${id}.png` } 
            alt='companies and projects' 
            className='card-image-top' 
            style={{ height: "250px"}} 
            onClick={ onClickNavigation }
          />
          <div className='card-body'>
            <p className="card-text">{ description }</p>
            <div className="d-flex flex-row justify-content-center mt-2">
              <button 
                  className="btn" 
                  style={{ 
                    backgroundColor: "purple", 
                    color: "white" 
                  }} 
                  onClick={onClickNavigation}>
                READ MORE
              </button>
            </div>
          </div> 
        </div>
    </div>

  )
}
