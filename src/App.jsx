// npm install react-circular-progressbar

import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import  Contact from './Components/Contact'
import About from './Components/About'
import Services from './Components/Services'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import Projects from './Components/Projects'


function App() {
  return (
    <div  >
 
    <Navbar />
      <Hero />
      <About />
      <Services />
       <Skills />
       <Projects />
      <Contact />
      <Footer />
     
    
    </div>
  )
}

export default App