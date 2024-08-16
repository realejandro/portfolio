import React from 'react'
import Footer from '../ui/Footer';
import Experience from '../ui/Experience';
import About from '../ui/About';
import './pagesStyles.css';




const MainPage = () => {
  return (
    <>
        <About />
        <h2 className='text-center'>My Best Experience</h2>      
        <Experience />
        <Footer />
    </>
    
  )
}

export default MainPage


