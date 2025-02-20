import React from 'react'

function Page2(){
  return (
    <>
    <div className='work relative flex flex-col items-center h-auto w-full mt-20'>

      <div className="vertical h-full w-1 border-2 border-emerald-200 absolute bg-emerald-100 left-[50.35%] mt-16"></div>


        <h1 className="border-2 border-emerald-700 hover:bg-emerald-100 duration-700 text-3xl h-fit px-5 py-3 rounded-2xl uppercase font-[Skia] font-bold text-emerald-500">Latest Projects</h1>
        
        <div className="p1 relative flex justify-between items-center flex-row w-full px-15 py-6">

            <div className="details w-[35vw] h-auto">
              <h3 className='text-3xl font-[Skia] mb-4 '>SunDown Studios</h3>
              <span>(Clone Web)</span>
              <p className='my-4 font-[Skia]'>Developed a fully responsive Sundown Studios Clone using HTML, CSS, and JavaScript. Designed an intuitive UI/UX with smooth animations and interactive elements to boost engagement. Focused on pixel-perfect design, responsive layouts, and optimized performance for a seamless, accessible, and efficient user experience across devices.</p>
              <ul className='w-full flex gap-2 mt-2 font-[American Typewriter]'>
                <li>
                  <h5 className='border-2 font-[American_Typewriter] border-emerald-700 rounded-4xl px-3 py-1'>HTML</h5>
                </li>
                <li>
                  <h5 className='border-2 font-[American_Typewriter] border-emerald-700 rounded-4xl px-3 py-1'>CSS</h5>
                </li>
                <li>
                  <h5 className='border-2 font-[American_Typewriter] border-emerald-700 rounded-4xl px-3 py-1'>Javascript</h5>
                </li>
                <li>
                  <h5 className='border-2 font-[American_Typewriter] border-emerald-700 rounded-4xl px-3 py-1'>Figma</h5>
                </li>
              </ul>
            </div>
            <div className="img-details w-[30vw] h-auto  ">
              <div className="imageWRAP flex items-end">
              <a className='' href="https://sundown-studio-clone-nine.vercel.app/">
                <img src="src/assets/sundown-mcb.png" alt="" className=' object-cover hover:scale-120 transition duration-300' />
              </a>
            </div>
            </div>
            <a href="https://sundown-studio-clone-nine.vercel.app/" className="dot bg-white z-50 absolute left-[50%] top-[50%] h-[15px] w-[15px] rounded-full border-3 border-orange-500"></a>
            <div className="dot-ext absolute h-1 w-[35%] -z-1 top-[51.5%] left-[51%] border-t-1 border-orange-500"></div>


        </div>

        <div className="p2 relative flex justify-between items-center flex-row w-full px-15 py-6">

           
            <div className="img-details w-[30vw] h-auto  ">
              <div className="imageWRAP flex items-end">
                <a className='' href="https://reigns-god.vercel.app/">
                  <img src="src/assets/nft-mac.png" alt="" className=' object-cover hover:scale-120 transition duration-300' />
                </a>
              </div>
            </div>


            <a href="https://reigns-god.vercel.app//" className="dot bg-white z-50 absolute left-[50%] top-[50%] h-[15px] w-[15px] rounded-full border-3 border-blue-500"></a>
            <div className="dot-ext absolute h-1 w-[35%] -z-1 top-[51.5%] left-[15%] border-t-1 border-blue-500"></div>


            <div className="details w-[35vw] h-auto">
              <h3 className='text-3xl font-[Skia] mb-4'>Reigns God - NFT Market </h3>
              <span>(Crypto web)</span>
              <p className='my-4 font-[Skia]'>a static NFT marketplace website with HTML and CSS, featuring a responsive UI with NFT collections, artist profiles, and a modern, intuitive layout for a seamless browsing experience.</p>
              <ul className='w-full flex gap-2 mt-2 font-[American Typewriter]'>
                <li>
                  <h5 className='border-2 font-[American_Typewriter] border-emerald-700 rounded-4xl px-3 py-1'>HTML</h5>
                </li>
                <li>
                  <h5 className='border-2 font-[American_Typewriter] border-emerald-700 rounded-4xl px-3 py-1'>CSS</h5>
                </li>
                {/* <li>
                  <h5 className='border-2 font-[American_Typewriter] border-emerald-700 rounded-4xl px-3 py-1'>Javascript</h5>
                </li> */}
                <li>
                  <h5 className='border-2 font-[American_Typewriter] border-emerald-700 rounded-4xl px-3 py-1'>Figma</h5>
                </li>
              </ul>
            </div>
        </div>


        <div className="p3 relative flex justify-between items-center flex-row w-full px-15 py-6">

            <div className="details w-[35vw] h-auto">
              <h3 className='text-3xl font-[Skia] mb-4'>Alex's Portfolio</h3>
              <span>(Capestone Project)</span>
              <p className='my-4 font-[Skia]'>A fully responsive website using HTML and CSS as part of the First Semester Final Project. The project focused on creating an intuitive and visually appealing user interface while ensuring cross-device compatibility and modern design principles.</p>
              <ul className='w-full flex gap-2 mt-2 font-[American Typewriter]'>
                <li>
                  <h5 className='border-2 font-[American_Typewriter] border-emerald-700 rounded-4xl px-3 py-1'>HTML</h5>
                </li>
                <li>
                  <h5 className='border-2 font-[American_Typewriter] border-emerald-700 rounded-4xl px-3 py-1'>CSS</h5>
                </li>
                {/* <li>
                  <h5 className='border-2 font-[American_Typewriter] border-emerald-700 rounded-4xl px-3 py-1'>Javascript</h5>
                </li> */}
                <li>
                  <h5 className='border-2 font-[American_Typewriter] border-emerald-700 rounded-4xl px-3 py-1'>Figma</h5>
                </li>
              </ul>
            </div>
            <div className="img-details w-[30vw] h-auto  ">
              <div className="imageWRAP flex items-end">
              <a className='' href="https://pratyush-capstone.netlify.app//">
                <img src="src/assets/capestone-mac.png" alt="" className=' object-cover hover:scale-120 transition duration-300' />
              </a>
            </div>
            </div>


            <a href="https://pratyush-capstone.netlify.app" className="dot bg-white z-50 absolute left-[50%] top-[50%] h-[15px] w-[15px] rounded-full border-3 border-black"></a>
            <div className="dot-ext absolute h-1 w-[35%] -z-1 top-[51.5%] left-[51%] border-t-1 border-black"></div>

        </div>


    
            
    </div>
  
    </>
  )
}

export default Page2