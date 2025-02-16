import React, { useRef, useState } from 'react'
// import Tilttext from '../components/Tilttext'
import Page1bottom from '../components/Page1bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Page1 = () => {
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
    }} className='h-screen w-full p-4 text-white' >
        <div id='page1-in' className=" shadow-2xl shadow-gray-700 h-full w-full bg-[url('./assets/face4.jpg')] bg-[length:120%]  bg-left py-10 px-12 rounded-4xl">
            <img className='h-16' src="src/assets/LOGO WHITE_edited.avif" />
            {/* <Tilttext/> */}
            <div id='tiltDiv' ref={tiltref} className='mt-65'>
                <h1 className='text-[4.2vw] leading-[4vw] uppercase font-[anzo3]'>I am <span className='text-black text-[5.7vw]'>CREATIVE</span>{'>'}</h1>
                <h1 className='text-[8.2vw] leading-[7vw] uppercase font-[anzo3]'>DEVELOPER</h1>
                <h1 className='text-[4.2vw] leading-[4vw] uppercase font-[anzo3]'>To Hire .</h1>
            </div>
            <Page1bottom/>
        </div>
    </div>
  )
}

export default Page1