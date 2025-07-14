import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'


export const Projects = () => {
  return (
    <div className='container-fluid d-flex justify-content-center experience mt-md-5 w-80'>
      <div className='row mt-md-5' style={{width:"85%", margin:"auto" }}>
        <div>
          <h1>Personal Projects</h1>
          <hr />
        </div>
        <div className="row row-lg-10">
        {
          projects.map( (project) => {
            console.log(project.id);
            return (  
            <div className="col-12 col-md-6 col-lg-4 d-flex mt-5" key={project.id}>
              <ProjectCard {...project} />
            </div>
            )})
        }
        </div>
      </div>
    </div>
  )
}
