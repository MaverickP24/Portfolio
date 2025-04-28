import React from 'react'
import "./index.css"

import Page2 from './pages/Page2'
import Skills from './pages/Skills'
import LandingPg from './pages/LandingPg'
import AboutMe from './pages/AboutMe'



const App = () => {
  return (
    <>
      <div className='w-screen h-[85vw] md:h-[70vw] overflow-hidden relative -scale-[99%] -left-2'><LandingPg/></div>
        <Page2 />
       <Skills/>
        <AboutMe/>
    </>
  )
}

export default App