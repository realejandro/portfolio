import React from 'react'

const skills = ["Java", " JavaScript", "MongoDB", "React.js", "MySql", "Selenium", "Cucumber", "Express.js", "Wordpress", "Full Stack Development" , "AWS Cloud Testing", "API Development and Testing" ]

const Skills = () => {
  
   return (
    <div className='container-fluid d-flex flex-column align-items-center mt-5 skills'>
        <div className='row mt-5'>
        <div className="col">
            <h3 className='text-center'>Skills</h3>
            <hr/>
        </div>
        </div>

        <div className='col-sm-3 col-md-6 col-lg-12'>
            <div className='row' style={{textAlign:'center'}}>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <p>JavaScript</p>
                    <p>MongoDB</p>
                    <p>React.js</p>
                    <p>Full Stack Development</p>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'style={{textAlign:'center'}}> 
                    <p>MySql</p>
                    <p>Selenium</p>
                    <p>Cucumber</p>
                    <p>AWS Cloud Testing</p>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12' style={{textAlign:'center'}}>
                    <p>Wordpress</p>
                    <p>Java</p>
                    <p>Express.js</p>
                    <p>API Development and Testing</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Skills