import React, { useEffect } from 'react'
import Footer from '../ui/Footer';
import Experience from '../ui/Experience';
import About from '../ui/About';
import './pagesStyles.css';
import { Projects } from '../ui/Projects';


export const MainPage = () => {

  return (
    <>    
        <About />      
        <Experience />
        <Projects />
        
    </>
    
  )
}




