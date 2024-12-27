import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../components/pages/MainPage'
import TestingDevelopmentPage from '../components/pages/TestingDevelopmentPage'
import Navbar from '../components/ui/Navbar'
import ProjectPage from '../components/pages/ProjectPage'
import { BlogPage, ContactPage } from '../components/pages'
import Footer from '../components/ui/Footer'





export const AppRouter = () => {
  return (
    <>  
        <Navbar />
        <Routes>
            <Route path='/' element={ <MainPage /> } />
            <Route path='blog' element={ <BlogPage />} />
            <Route path='test' element={<TestingDevelopmentPage />}/>
            <Route path='project/:idProject' element={ <ProjectPage /> } />
            <Route path='contact' element={ <ContactPage /> } />
        </Routes>
        
    </>
  )
}
