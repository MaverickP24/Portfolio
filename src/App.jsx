import React from 'react'
import "./index.css"
import Page1 from './pages/page1'
import Navbar from './components/pavbar'
import Page2 from './pages/Page2'


const App = () => {
  return (
    <>
      <Navbar/>
      <Page1/>
      <Page2 />
    </>
  )
}

export default App