import React from 'react'

const About = () => {
  return (
    <div className='container-fluid p-0 presentation'>
        <div className='container-fluid p-0 d-flex justify-content-center align-items-center video'>
          <div className='presentation-img'>
            <img src='./assert/images/portfolioImg.jpg' width={"100%"} /> 
            <div className='presentation-text'>
              <div className='text-center'>
                <div>
                  <h1> Hello, I am Alejandro! </h1>
                </div>
                <div className='mt-5'>
                  <h2>
                    Welcome to my portfolio! Explore my journey through code and creativity.
                    I am a Software Engineer with many years of experience Developing and Testing 
                    softwares!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>      
  )
}

export default About