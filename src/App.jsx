import React from 'react'
import "./index.css"

import Page2 from './pages/Page2'
import Skills from './pages/Skills'
import LandingPg from './pages/LandingPg'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'



const App = () => {
  return (
    <>
        <LandingPg/>
        <Page2 />
       <Skills/>
        <AboutMe/>
        <Contact/>
    </>
  )
}

export default App