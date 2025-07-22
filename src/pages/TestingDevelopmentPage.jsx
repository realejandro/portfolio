import React from 'react'
import Modal from '../components/ui/Modal'
import { Card } from '../components/ui/Card'

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
    </>
  )
}

export default TestingDevelopmentPage