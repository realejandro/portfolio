import React from 'react'
import { companies } from '../../data/companies'
import Card from './Card'


const Experience = () => {



  return (
    <div className='container-fluid d-flex justify-content-center experience mt-md-5'>
          <div className='row w-75 mt-md-5'>
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