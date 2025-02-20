import React from 'react'
import "./index.css"
import Page2 from './pages/Page2'
import Skills from './pages/Skills'
import LandingPg from './pages/LandingPg'


const App = () => {
  return (
    <>
      <div>
        <LandingPg/>
        <Page2 />
        <Skills/>
      </div>
    </>
  )
}

export default App