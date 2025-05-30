import React from 'react'

const AboutMe = () => {
  return (
   <>
   <div className="all h-[80vh] w-full relative flex flex-col items-center mt-20 md:mt-10 ">
        <div className='w-[60vw] text-center'>
        <h1 className=' text-[5vw] md:text-[3vw] font-[Skia] text-emerald-500 font-semibold'>About Me</h1>
        <p className='text-[3vw] md:text-[1.5vw] font-[Skia] text-center '>Here you can find a little bit about me. I am a passionate designer and developer !</p>


        <div className="details flex flex-col gap-5">
            <div className="aboutme flex flex-col md:flex-row gap-6 mt-10 relative">
                <div className="name border-1 rounded-4xl border-zinc-400 w-full h-[30vw] md:w-[40vw] md:h-[15vw] relative">
                    <div className="upper h-auto w-full rounded-full object-cover py-3 px-1">
                        <div className="left-0 md:h-[6.6vw] md:w-[6.6vw]  h-[10vw] w-[10vw]  rounded-full object-cover mt-[1vw] ml-[2vw]">
                        <img className='h-full w-full rounded-full object-cover object-[30%_80%]' src="/user.jpg" alt="L" /></div>
                    </div>
                    <div className="lower relative flex flex-row justify-between">
                        <div>
                        <div className="font-[alag anzo] px-[2vw] md:px-12"><h1 className='text-[3vw] md:text-[1.8vw] font-bold'>Pratyush</h1></div>
                        <div className="font-[anzo] px-[2vw] md:px-12"><h1 className='text-[10px] md:text-[15px] font-light'>MaverickP24</h1></div>
                        </div>
                        <button className='md:px-5 md:py-3  px-[2vw] py-[1vw] hidden md:block '><h3 className=' text-[1vw]  border-1 border-zinc-500 bg-emerald-300 px-4 py-2 rounded-4xl '>5 Public Projects</h3></button>
                    </div>
                    <a href='https://github.com/MaverickP24' target="_blank" className="github h-8 w-8 object-cover absolute right-3 top-3 text-zinc-800">
                    <svg className='h-full w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path
                        fill="currentColor"
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                    </a>
                </div>
                <div className="location border-1  rounded-4xl border-zinc-400   w-auto h-[30vw]  md:w-[25vw] md:h-[15vw]  object-top overflow-hidden relative">
                    <img className=' absolute md:top-10 left-2 h-full w-full  scale-[140%] object-top' src="https://i.imgur.com/LAkzOFj.png" alt="L" />
                </div>
                
            </div>
            <div className="aboutme flex flex-col md:flex-row gap-6  ">
                <div className="CV border-1 relative rounded-4xl border-zinc-400 w-auto h-[30vw]  md:w-[25vw] md:h-[15vw] bg-black flex flex-col items-center font-[anzo3] overflow-y-hidden group ">
                    <h2 className=' text-[3.5vw] md:text-[2vw] text-white pt-4 pb-2 '>My Curriculum Vitae</h2>
                    <h5 className='text-[15px] hidden md:block text-white font-[anzo]'>Hover to Download</h5>


                    <div className="h-[20px]  z-30  absolute bottom-10 opacity-0 group-hover:opacity-[100%]  transition-all duration-300 "><a href="https://drive.usercontent.google.com/u/3/uc?id=1IR5M5yNnZ-e3ZsjFkvy8e8ZNhHvDe4RX&export=download"className='text-white px-4 py-2 rounded-3xl bg-emerald-600'>DOWNLOAD CV</a></div>


                    <div className='resume md:h-[18vw] md:w-[16vw] w-[30vw] bg-emerald-500 rounded-2xl absolute top-15 md:top-25 transition-all duration-300 group-hover:top-4 '><a target='_blank' href="https://drive.google.com/file/d/1IR5M5yNnZ-e3ZsjFkvy8e8ZNhHvDe4RX/view"><img src={"/CV.png"} className='rounded-[10px]' alt="i" /></a>
                    
                    
                    </div>
 

                </div>
                <div className="vdo border-1 rounded-4xl border-zinc-400 w-auto h-[40vw] md:w-[35vw] md:h-[15vw] overflow-hidden relative"><video className=' absolute md:bottom-0 -left-10 scale-[130%]' loop autoPlay muted  src="https://cdn.pixabay.com/video/2023/07/04/169951-842348732_large.mp4"></video></div>
            </div>


        </div>
   </div>
   </div>
   </>
  )
}

export default AboutMe