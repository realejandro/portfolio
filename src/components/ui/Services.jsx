import React from 'react'
import Card from './Card'
import { services } from '../../data/services'


export const Services = () => {
  return (
    <div>
        <h1>Services</h1>
        <div className='container-fluid mt-5' id='projects'>
            <div className='row justify-content-around'>
                {
                    services.map( service => {
                        return <Card 
                            id={ service.id }
                            title={ service.title }
                            description={ service.description }
                        />
                    })

                }
            </div>
        </div>
    </div>
  )
}
/**<div>
                Web Development (Including Wordpress)
            </div>
            <div>
                Maintain And Update CMS Wordpress
            </div>
            <div>
                QA Software Automation
            </div>
            <div>
                Software Development
            </div> */