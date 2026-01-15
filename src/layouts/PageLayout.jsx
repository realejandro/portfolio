import React from 'react'
import Footer from '../components/ui/Footer'
import { Separation } from '../components/ui/Separation'

const PageLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* Main content grows to fill space */}
      <main className="flex-grow-1 pb-5">
        { children }
      </main>

      {/* Footer stays at bottom */}
      <Separation height={"7.5rem"} />
      <Footer />
    </div>
  )
}

export default PageLayout