import { Route, Routes } from 'react-router-dom'
import TestingDevelopmentPage from '../pages/TestingDevelopmentPage'
import { Navbar } from '../components/ui'
import { MainPage, BlogPage, ContactPage, CompanyPage } from '../pages'


export const AppRouter = () => {
  return (
    <>  
        <Navbar />
        <Routes>
            <Route 
              path='/' 
              element={ 
                <MainPage /> 
              } 
            />
            <Route 
              path='blog' 
              element={ 
                <BlogPage/>
              } 
            />
            <Route 
              path='test' 
              element={
                <TestingDevelopmentPage/>
                }
            />
            <Route 
              path='project/:idProject' 
              element={ 
                <CompanyPage /> 
              } 
            />
            <Route 
              path='contact' 
              element={ 
                <ContactPage /> 
                } 
              />
        </Routes>
        
    </>
  )
}
