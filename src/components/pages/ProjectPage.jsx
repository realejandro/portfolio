import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProjectById } from '../../helpers/getProjectById';

const ProjectPage = () => {

    const { idProject } = useParams();
    const navigate =  useNavigate();
    const { id, title, description, mission, role, url } = getProjectById(idProject);


    const getBackHome = () => { 
        navigate('/')
    }
    
    //console.log(projectObj);

    return (

    <div className='container-fluid mt-5'>
        <div className='row'>
            <div className="col-lg-6">
                <img 
                    src={ `/assets/images/${ id }.png` } 
                    className='img-thumbnail w-100'
                    alt=''
                    />
            </div>
            <div className="col-lg-6 mt-lg-5">
                <div>
                    <h2 className=''>{ title }</h2>
                    <p>{ description }</p>
                    <p> Objetive: { mission } </p>
                    <p>Role : { role }</p>
                    <a href={ url }> { url } </a>
                    <div>
                        <button 
                            className='btn btn-dark mt-3'
                            onClick={ getBackHome } >
                                Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectPage