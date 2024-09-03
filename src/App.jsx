import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Feedback from './Components/Feedback'
import Tech from './Components/Tech'



const App = () => {
  return (
    <BrowserRouter>

     <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover">
        <Navbar />
        <Hero />
      </div>
      <About/>
      <Experience/>
      <Tech />
     </div>
     <div className="relative z-0">
      <Contact/>
     </div>
    
    </BrowserRouter>
  
  )
}

export default App