import './../pages/pagesStyles.css';
import React, { useState } from 'react'


const ContactPage = () => {

    const [ inputs, setInputs ] = useState({
        username:"",
        email:"",
        message:"",
    });

    const onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
       setInputs( (prevFormData ) => ({ ...prevFormData, [name]:value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hello ${inputs.username} - ${inputs.email} - ${inputs.message}`)
    }
    

  return (
    <div className='container-fluid mt-5' id='contact'>
        
            <div className='row p-0 justify-content-center'>
                <div className='col-5'>
                    <div>
                        <h1 style={{ textAlign:"center" }} className='intro-h1'>Contact</h1>
                    </div>
                    <form onSubmit={ handleSubmit }>
                        <div>
                            <label className='contact-label mt-5'> Name *</label>
                            <input 
                                type={"text"} 
                                name='username'
                                className="form-control" 
                                placeholder='Your Name...'
                                value={ inputs.username }
                                onChange={ onHandleChange }
                            />
                        </div>

                        <div>
                            <label className='contact-label mt-4'>Email Address *</label>
                            <input 
                                type={"email"} 
                                name='email'
                                className="form-control" 
                                placeholder='Your Email...' 
                                value={ inputs.email }
                                onChange={ onHandleChange }
                            />
                        </div>

                        <div>
                            <label className='contact-label mt-4'>Message *</label>
                            <textarea 
                                placeholder='Your Message...' 
                                className='form-control' 
                                name='message'
                                style={{
                                    height:"110px",
                                }}
                                value={ inputs.message }
                                onChange={ onHandleChange }
                            />
                        </div>

                        <div className='mt-4'> 
                            <button type='submit' className='btn btn-dark w-25'>Submit</button>
                        </div>
                    </form>
                </div> {/* end contact form*/}
            </div>
        </div>
        
  )
}

export default ContactPage;