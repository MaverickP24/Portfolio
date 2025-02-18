import React, { useRef, useState } from 'react'
// import Tilttext from '../components/Tilttext'
import Page1bottom from '../components/Page1bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function Page1(){
    const tiltref = useRef(null)
    const [xVal, setxVal] = useState(0)
    const [yVal, setyVal] = useState(0)

    const mouseMoving = (e) =>{
        setyVal((e.clientX - tiltref.current.getBoundingClientRect().x - tiltref.current.getBoundingClientRect().width/2)/15)
        setxVal(-(e.clientY - tiltref.current.getBoundingClientRect().y - tiltref.current.getBoundingClientRect().height/2)/15)

        // console.log(e.clientX - tiltref.current.getBoundingClientRect().x - tiltref.current.getBoundingClientRect().width/2);
        // tiltref.current.style.transform = `rotateX(${xVal}deg) rotateY(${yVal}deg)`
    }

    useGSAP(function(){
        gsap.to(tiltref.current,{
            transform : `rotateX(${xVal}deg) rotateY(${yVal}deg)`,
            duration:2,
            ease:"elastic.out(1,0.3)"
        })
    },[xVal,yVal])



  return (
    <div id='page1' onMouseMove={(e)=>{
        mouseMoving(e)
    }} className='h-screen w-full p-4 mx-auto text-white' >
        <div id='page1-in' className=" shadow-2xl shadow-gray-700 h-full w-full bg-[url('./assets/face4.jpg')] bg-[length:120%]  bg-left py-10 px-12 rounded-4xl">
            <div className=" mix-blend-multiply m-4 mb-1 p-6 rounded-4xl h-[96.6vh] w-full bg-gradient-to-r from-black to-transparent  top-0 left-0  absolute "></div>

            <div className=" absolute right-10 top-50 flex flex-col items-center justify-end z-40 ">
                <a href="#" className='text-white h-10 w-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            fill="currentColor"
                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                </a>
                <a href="#" className='text-white h-10 w-10 mt-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            fill="currentColor"
                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                </a>

            </div>

            <img className='h-16 relative z-20' src="src/assets/LOGO WHITE_edited.avif" />

            {/* <Tilttext/> */}
            <div id='tiltDiv' ref={tiltref} className='mt-65'>
                <h1 className='text-[4.2vw] leading-[4vw] uppercase font-[anzo3]'>I am <span className='text-emerald-500 text-[5.7vw]'>CREATIVE</span>{'>'}</h1>
                <h1 className='text-[8.2vw] leading-[7vw] uppercase font-[anzo3]'>DEVELOPER</h1>
                <h1 className='text-[4.2vw] leading-[4vw] uppercase font-[anzo3]'>To Hire .</h1>
            </div>

            <Page1bottom/>
        </div>
    </div>
  )
}

export default Page1