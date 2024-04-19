import React from 'react'

const skills = ["Java", " JavaScript", "MongoDB", "React.js", "MySql", "Selenium", "Cucumber", "Express.js", "Wordpress", "Full Stack Development" , "AWS Cloud Testing", "API Development and Testing" ]

const Skills = () => {
  
   return (
    <div className='container-fluid mt-5'>
        <div>
        <h3 className='text-center'>Skills</h3>
        <hr/>
        </div>
        <div className='row' style={{textAlign:'center'}}>
            <div className='col-4'>
                <p>Java</p>
                <p>JavaScript</p>
                <p>MongoDB</p>
                <p>React.js</p>
            </div>
            <div className='col-4'style={{textAlign:'center'}}> 
                <p>MySql</p>
                <p>Selenium</p>
                <p>Cucumber</p>
                <p>Express.js</p>
            </div>
            <div className='col-4' style={{textAlign:'center'}}>
                <p>Wordpress</p>
                <p>Full Stack Development</p>
                <p>AWS Cloud Testing</p>
                <p>API Development and Testing</p>
            </div>
        </div>
    </div>
  )
}

export default Skills