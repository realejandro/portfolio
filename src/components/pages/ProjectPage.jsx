import React from 'react'
import { useParams } from 'react-router-dom'
import { getProjectById } from '../../helpers/getProjectById';

const ProjectPage = () => {

    const { idProject } = useParams();
    const projectObj = getProjectById(idProject);
    
    
    return (

    <div className='container-fluid'>
        <div className='col'>
            <div className="row">
                <img src={ `/assert/images/${ projectObj.id }.png` } alt=''/>
            </div>
            <div className="row">
                <p>{ projectObj.description }</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectPage