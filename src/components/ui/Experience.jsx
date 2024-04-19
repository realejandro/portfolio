import React from 'react'
import { companies } from '../../data/companies'
import Card from './Card'

const Experience = () => {
  return (
    <div className='container-fluid mt-5' id='projects'>
          <div className='d-flex row m-3'>
            {
              companies.map( company => (
                <Card 
                  key={ company.id }
                  { ...company }
                />
              ))
            }
          </div>
    </div>
  )
}

export default Experience