import React from 'react'
import { projects } from '../../data/projects'
import { Card } from './Card';



export const Projects = () => {
  return (
    <div className='container-fluid d-flex justify-content-center experience mt-md-5'>
      <div className='row w-75 mt-md-5'>
        <h1>Personal Projects</h1>
        <hr />
        {
          projects.map( (project) => {
            console.log(project.id);
            return(
            <Card
              key={ project.id }
              url={ project.url }
              { ...project }
            />)
          })
        }
      </div>
    </div>
  )
}
