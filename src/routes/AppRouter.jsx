import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BlogPage } from '../components/pages/BlogPage'
import MainPage from '../components/pages/MainPage'
import TestingDevelopmentPage from '../components/pages/TestingDevelopmentPage'
import Navbar from '../components/ui/Navbar'
import ProjectPage from '../components/pages/ProjectPage'
import ContactPage from '../components/pages/ContactPage'
import Skills from '../components/ui/Skills'
import { Sdet } from '../blogs/Sdet'


export const AppRouter = () => {
  return (
    <>  
        <Navbar />
        <Routes>
            <Route path='/' element={ <MainPage /> } />
            <Route path='blog' element={ <BlogPage />} />
            <Route path='blogs/:idBlog' element={<Sdet />} />
            <Route path='test' element={<TestingDevelopmentPage />}/>
            <Route path='project/:idProject' element={ <ProjectPage /> } />
            {/*<Route path='skills' element={<Skills/>} /> */}
            <Route path='contact' element={ <ContactPage /> } />
        </Routes>
    </>
  )
}
