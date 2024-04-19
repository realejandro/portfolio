import React from 'react'
import Card from '../ui/Card'
import Modal from '../ui/Modal'

const TestingDevelopmentPage = () => {
  return (
    <>
        <Card
            title={'Diaverum'}  
            imgUrl={'./assert/images/diaverum-logo-vector.png'}
            description={'Health care Company'}
        />
        <div>
          <Modal />
        </div>
    </>
  )
}

export default TestingDevelopmentPage