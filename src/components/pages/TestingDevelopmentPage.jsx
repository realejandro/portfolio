import React from 'react'
import Card from '../ui/Card'
import Modal from '../ui/Modal'
import { Services } from '../ui/Services'

const TestingDevelopmentPage = () => {
  return (
    <>
        <Card
            title={'Diaverum'}  
            imgUrl={'./assets/images/diaverum-logo-vector.png'}
            description={'Health care Company'}
        />
        <div>
          <Modal />
        </div>
        <div>
          <Services/>
        </div>
    </>
  )
}

export default TestingDevelopmentPage