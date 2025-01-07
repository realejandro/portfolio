import React from 'react'
import Modal from '../ui/Modal'
import { Card } from '../ui'

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