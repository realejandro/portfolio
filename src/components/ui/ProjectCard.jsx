import { Link } from 'react-router-dom'
import { createUrlImage } from '../../utils/urlProjectsImages'
import { capitalizeWord } from '../../utils/capitalizeString'

export const ProjectCard = ({ title, description, id, role, url, url_github, skills }) => {

  return (
    <div className="card p-0" style={{ 
      objectFit:"cover", 
      borderRadius:"15px",  
      boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.7)',
    }}>
        <img
          src={createUrlImage(id)}
          alt="companies and projects"
          className="card-image-top w-100"
          style={{ height: "250px", borderRadius: "15px 15px 0 0", objectFit:"cover" }}
        />
        <div className="card-body">
            <h5 className="card-title">{ title }</h5>
            <p className="card-text">{ description }</p>
            <p className="card-text">{ role }</p>
            <div className="card-text d-flex flex-row flex-wrap gap-3">
              { 
                skills.map( (skill) => {
                  return (<p style={{ 
                    backgroundColor: "GrayText", 
                    padding: "10px", 
                    color:"white",
                    borderRadius:"30px"
                    }}
                    key={skill+id}
                    >
                      { capitalizeWord(skill) }
                  </p>
                  )}
                ) 
              }
            </div>
            {
              url.length > 0 ?
              <div className="d-flex flex-row justify-content-between mt-2">
                <Link to={url} target="_blank" className="btn" style={{ backgroundColor: "purple", color: "white"}}>Live Preview</Link>
                <Link to={url_github} target="_blank" className="btn btn-dark"> Github </Link>
              </div>
              :
              <div className='d-flex flex-row justify-content-between mt-2'>
                <p style={{ backgroundColor: "darkred", color: "white", padding: "10px", borderRadius:"5px"}}>Project not available</p>
              </div>
            }
            
        </div>
    </div>
  )
}
