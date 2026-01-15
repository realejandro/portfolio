import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import "./style.css";

export const Projects = () => {
  return (
    <div className='container-fluid d-flex justify-content-center mt-md-5'>
      <div className='row mt-md-5 w-100 mx-auto'>
        <div className='row m-auto mt-5' style={{"width": "80%"}}>
          <h1>Projects</h1>
          <hr />
        </div>
        <div className="row row-lg-10 responsive-row">
        {
          projects.map( (project) => {
            console.log(project.id);
            return (  
            <div className="col-12 col-md-6 col-lg-4 d-flex mt-5" key={ project.id }>
              <ProjectCard {...project} />
            </div>
            )})
        }
        </div>
      </div>
    </div>
  )
}
