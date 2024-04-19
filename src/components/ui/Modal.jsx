import React, { useState } from 'react'
import './style.css';

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div>
        Modal
        <button
            onClick={toggleModal} 
            className='btn btn-modal'>click
        </button>
        <div className='modal'>
            <div className='overlay'></div>
            <div className='modal-content'>Hello</div>
        </div>
    </div>
  )
}

export default Modal