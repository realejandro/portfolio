import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='container-fluid p-0 d-flex justify-content-center about mt-5'> 
        <div className='row w-75'>
          <div className='col-12 d-flex flex-column justify-content-center col-sm-12 col-md-12 col-lg-6'>
                    <h1 className='intro-h1'>Welcome to my portfolio! </h1>
                    <h2>I am Alejandro Cabrera!</h2>
                    <p className='content-text'>Explore my journey through coding and creativity.
                    I am a Software Engineer with many years of experience Developing and Testing 
                    softwares! This is my temple to talk about programming, new technologies, what 
                    we can do in the future with programming skills, jobs, economy and more. feel free to 
                    connect</p>
                    <div className='d-sm-flex justify-content-center d-md-flex justify-content-center d-xl-flex justify-content-start'>
                      <div className='col-6 col-sm-6 col-md-6 mt-4 d-sm-flex justify-content-center 
                          d-md-flex justify-content-center d-lg-flex justify-content-start'>
                        <button className='btn btn-dark '><Link to={'https://planet-frost-acd.notion.site/Alejandro-Cabrera-SDET-Portfolio-56e39140b78f45f8888d6f1ec876c720'} className='nav-link text-light' target='_blank'> About me </Link></button>
                      </div>
                    </div>
          </div>

          <div className='col-12 d-flex flex-column justify-content-center col-sm-12 col-md-12 col-lg-6 p-0 mb-md-5'>
            <img src='./assets/images/computer-intro-3.png'  width={'100%'} /> 
          </div>
        </div>
    </div>      
  )
}

export default About

/* 
<div className='container-fluid p-0 d-flex justify-content-center align-items-center video'>
          <div className='presentation-img'>
            <img src='./assets/images/portfolioImg.jpg' width={ "100%" } /> 
            <div className='presentation-text'>
              <div className='text-center'>
                <div>
                  <h1 className='flex-sm-'> Hello, I am Alejandro! </h1>
                </div>
                <div className='mt-5'>
                  <h2 className='col-sm-12'>
                    Welcome to my portfolio! Explore my journey through coding and creativity.
                    I am a Software Engineer with many years of experience Developing and Testing 
                    softwares!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
*/