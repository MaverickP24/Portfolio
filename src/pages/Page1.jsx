import React from 'react'
import Tilttext from '../components/Tilttext'
import Page1bottom from '../components/Page1bottom'

const Page1 = () => {
    const mouseMoving = (e) =>{
        // console.log(e.clientX);
        

    }
  return (
    <div onMouseMove={(e)=>{
        mouseMoving(e)
    }} className='h-screen w-full p-4 text-white' >
        <div className="h-full w-full bg-[url('./assets/face4.jpg')] bg-[length:120%]  bg-left py-10 px-12 rounded-4xl">
            <img className='h-16' src="src/assets/LOGO WHITE_edited.avif" />
            <Tilttext/>
            <Page1bottom/>
        </div>
    </div>
  )
}

export default Page1