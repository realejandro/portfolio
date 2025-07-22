import React from 'react';
import '../../pages/pagesStyles.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='container-fluid p-2 bg-dark footer'>
          <div className='row d-flex align-items-center'> 
                <div className='col'>
                  <p className='text-center text-light contact-link'><Link to={'/contact'} className='nav-link text-light mt-2'>Click here!</Link></p>
                </div>

                <div className='col'>
                  <p className='text-center text-light mt-2 name-footer'>Alejandro Cabrera - Software Engineer</p>
                </div>

                <div className='col d-flex justify-content-center'>
                  <div className='p-2'>
                    <a className='medialinks' href='https://github.com/realejandro' target={'_blank'}><i className ="fa-brands fa-github fa-2xl"></i> </a>
                  </div>
                  <div className='p-2'>
                    <a className='medialinks' href='https://www.linkedin.com/in/alejcabrera07/' target={'_blank'}><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                  </div>
                  <div className='p-2'>
                    <a className='medialinks' href='https://planet-frost-acd.notion.site/Alejandro-Cabrera-SDET-Portfolio-56e39140b78f45f8888d6f1ec876c720?pvs=4' target={'_blank'}><i className="fa-solid fa-globe fa-2xl"></i></a>
                  </div>
                </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer;


/* 
                <div className='p-1'>
                <a className='medialinks' href='https://github.com/realejandro' target={'_blank'}><i className ="fa-brands fa-github fa-2xl"></i> </a>
              </div>
              <div className='p-1'>
                <a className='medialinks' href='https://www.linkedin.com/in/alejcabrera07/' target={'_blank'}><i className="fa-brands fa-linkedin fa-2xl"></i></a>
              </div>
*/