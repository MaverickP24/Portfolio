import React from 'react'
import "./index.css"
import Page1 from './pages/Page1'
// import Navbar from './components/navbar'
import Page2 from './pages/Page2'
import Skills from './pages/Skills'


const App = () => {
  return (
    <>
      <div>
        {/* <Navbar/> */}
        <Page1/>
        <Page2 />
        <Skills/>
      </div>
    </>
  )
}

export default App