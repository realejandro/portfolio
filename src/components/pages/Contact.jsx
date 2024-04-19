import './../pages/pagesStyles.css';
import React, { useState } from 'react'


const Contact = () => {

    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

  return (
    <div className='container-fluid mt-5' id='contact'>
        
            <div className='row p-0 justify-content-center'>
                <div className='col-5'>
                    <div>
                        <h1 style={{ textAlign:"center" }}>Contact</h1>
                    </div>
                    <form>
                        <div>
                            <label className='contact-label mt-5'> Name *</label>
                            <input type={"text"} className="form-control" placeholder='Your Name...'/>
                        </div>

                        <div>
                            <label className='contact-label mt-4'>Email Address *</label>
                            <input type={"email"} className="form-control" placeholder='Your Email...' />
                        </div>

                        <div>
                            <label className='contact-label mt-4'>Message *</label>
                            <textarea placeholder='Your Message...' className='form-control' style={{
                                height:"110px",
                            }}/>
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

export default Contact;