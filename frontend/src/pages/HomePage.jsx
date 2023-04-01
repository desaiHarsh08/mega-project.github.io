import React from 'react'
import { About, Contact, Features, Footer, Home, LatestSchemes, Navbar } from '../components'


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Features />
      <LatestSchemes />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
