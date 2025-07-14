import React from 'react'
import { companies } from '../../data/companies'
import { Card } from './Card'


const Experience = () => {

  return (
    <div className='container-fluid d-flex justify-content-center experience mt-md-5'>
          <div className='row mt-md-5' style={{"width": "80%"}}>
            <h1>Experience</h1>
            <hr/>
            {
              companies.map( company => {
                console.log(company.id)
                return (
                  <Card 
                    key={ company.id }
                    id={ company.id }
                    cardType={'company'}
                    description={company.cardDescription}         
                  />
                )
              })
            }
          </div>
    </div>
  )
}

export default Experience