import { useNavigate } from 'react-router-dom';
import './../pages/pagesStyles.css';
import React, { useState } from 'react'


export const ContactPage = () => {


    const [message, setMessage] = useState(false);

    const [ inputs, setInputs ] = useState({
        name:"",
        email:"",
        message:"",
    });

    const navigate = useNavigate();

    const onClickBackHome = () => {
        navigate('/');
    }

    const onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
       setInputs( (prevFormData ) => ({ ...prevFormData, [name]:value }))
    }

    const handleSubmit = async(event) => {
        
        event.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_URL_BACKEND}/messages`, {
                method:"POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(inputs)
            });

            setMessage(message => !message);

            if(!response.ok) { 
                throw new Error('Network response was not ok')
            }
            /*
            const data = await response.json();
            alert( data.msg );
            */
        } catch (error) {
            console.error('Error registering user: ', error);
            alert('registration failed');
        }
        
    }
    

  return (
    <div className='container-fluid mt-5' id='contact'>
        
            <div className='row p-0 justify-content-center'>
                { (!message) 
                    ? <div className='col-5'>
                        <div>
                            <h1 style={{ textAlign:"center" }} className='intro-h1'>Contact</h1>
                        </div>

                        <form onSubmit={ handleSubmit }>
                            <div>
                                <label className='contact-label mt-5'> Name *</label>
                                <input 
                                    type={"text"} 
                                    name='name'
                                    className="form-control" 
                                    placeholder='Your Name...'
                                    value={ inputs.name }
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
                                    placeholder='Exm: I want to talk about....' 
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
                    </div> 
                : <div className='container d-flex flex-column align-items-center'>
                    <h2 style={{ textAlign: 'center' }}>Message sent</h2>
                    <button className='btn btn-secondary'
                        style= {{ 
                            width:'5%', 
                            backgroundColor:'#212529'
                            }}
                        onClick={ onClickBackHome } >  
                        Back 
                    </button>
                  </div>
                }
                
            </div>
        </div>
        
  )
}

