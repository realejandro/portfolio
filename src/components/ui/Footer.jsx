import React from 'react';
import './../pages/pagesStyles.css';

function Footer() {
  return (
    <div className='footer container-fluid p-0'>
           <div className='socialmedia pt-5'> 
              <div className='d-flex flex-column'>
                <p className='align-self-center'>Alejandro Cabrera</p>
                <p>Software Engineer | Software Tester</p>
              </div> 
              <div className='p-1'>
                <a className='medialinks' href='https://github.com/realejandro' target={'_blank'}><i className ="fa-brands fa-github fa-2xl"></i> </a>
              </div>
              <div className='p-1'>
                <a className='medialinks' href='https://www.linkedin.com/in/alejcabrera07/' target={'_blank'}><i className="fa-brands fa-linkedin fa-2xl"></i></a>
              </div>
                  
            </div>
            
    </div>
  )
}

export default Footer;