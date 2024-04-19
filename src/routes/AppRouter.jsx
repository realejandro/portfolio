import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BlogPage } from '../components/pages/BlogPage'
import MainPage from '../components/pages/MainPage'
import TestingDevelopmentPage from '../components/pages/TestingDevelopmentPage'
import Navbar from '../components/ui/Navbar'
import ProjectPage from '../components/pages/ProjectPage'
import  Contact from '../components/pages/Contact';

export const AppRouter = () => {
  return (
    <>  
        <Navbar />
        <Routes>
            <Route path='/' element={ <MainPage /> } />
            <Route path='blog' element={ <BlogPage />} />
            <Route path='test' element={<TestingDevelopmentPage />}/>
            <Route path='project/:idProject' element={ <ProjectPage /> } />
            <Route path='contact' element={ <Contact /> } />
        </Routes>
    </>
  )
}
