import React from 'react'

function Page2(){

  const project = [
    {
      name: "Zentry - Gamming Community",
      description:"Built a dynamic and responsive clone of Zentry – a gaming community platform – using React, Tailwind CSS, and GSAP. Crafted immersive animations and interactive UI components to elevate user engagement. Prioritized clean design, responsiveness, and smooth performance across all devices.",
      image:"https://i.imgur.com/dJcp7eN.png",
      link: "https://zentry-sable.vercel.app/",
      skills:["React","GSAP","Tailwind CSS"]
    },
  {
    name: 'SunDown Studios',
    description: "Developed a fully responsive Sundown Studios Clone using HTML, CSS, and JavaScript. Designed an intuitive UI/UX with smooth animations and interactive elements to boost engagement. Focused on pixel-perfect design, responsive layouts, and optimized performance for a seamless, accessible, and efficient user experience across devices.",
    image:"https://i.imgur.com/gsiahdc.png",
    link: "https://sundownstudios.netlify.app/",
    skills:["HTML","CSS","javascript"]
  },
  {
    name: 'Reigns God - NFT Market ',
    description:"a static NFT marketplace website with HTML and CSS, featuring a responsive UI with NFT collections, artist profiles, and a modern, intuitive layout for a seamless browsing experience.",
    image:"https://i.imgur.com/2NzZel5.png",
    link: "https://reignsgod.netlify.app/",
    skills:["HTML","CSS","Figma"]
  },

]

  return (
    <>
    <div className='work relative flex flex-col items-center h-auto w-full mt-20'>

      <div className="vertical h-full w-1 border-2 border-emerald-200 absolute bg-emerald-100 left-[50.35%] mt-16"></div>


        <h1 className="border-2 border-emerald-700 hover:bg-emerald-100 duration-700 text-3xl h-fit px-5 py-3 rounded-2xl uppercase font-[Skia] font-bold text-emerald-500">Latest Projects</h1>
        
        {project.map((data,idx)=> (

          idx%2 == 0 
          ?

          <div key={idx} className="p1 relative flex justify-between items-center flex-row w-full px-15 py-6">

              <div className="details w-[35vw] h-auto">
                <h3 className='text-3xl font-[Skia] mb-4 '>{data.name}</h3>
                {/* <span>(Clone Web)</span> */}
                <p className='my-4 font-[Skia]'>{data.description}</p>
                <ul className='w-full flex gap-2 mt-2 font-[American Typewriter]'>
                  {data.skills.map((item,idxx)=>(
                    <li>
                    <h5 key={idxx} className='border-2 capitalize font-[American_Typewriter] border-emerald-700 rounded-4xl px-3 py-1'>{item}</h5>
                  </li>
                  ))}
                </ul>
              </div>


              <div className="img-details w-[30vw] h-auto  ">
                <div className="imageWRAP flex items-end">
                <a className='' href={data.link}>
                  <img src={data.image} alt={data.name} className=' object-cover hover:scale-120 transition duration-300' />
                </a>
              </div>
              </div>
              <a href={data.link} className="dot bg-white z-50 absolute left-[50%] top-[50%] h-[15px] w-[15px] rounded-full border-3 border-orange-500"></a>
              <div className="dot-ext absolute h-1 w-[35%] -z-1 top-[51.5%] left-[51%] border-t-1 border-orange-500"></div>

              
          </div>

          :

          <div className="p2 relative flex justify-between items-center flex-row w-full px-15 py-6">

           
            <div className="img-details w-[30vw] h-auto  ">
              <div className="imageWRAP flex items-end">
                <a className='' href={data.link}>
                  <img src={data.image} alt="" className=' object-cover hover:scale-120 transition duration-300' />
                </a>
              </div>
            </div>


            <a href={data.link} className="dot bg-white z-50 absolute left-[50%] top-[50%] h-[15px] w-[15px] rounded-full border-3 border-blue-500"></a>
            <div className="dot-ext absolute h-1 w-[35%] -z-1 top-[51.5%] left-[15%] border-t-1 border-blue-500"></div>


            <div className="details w-[35vw] h-auto">
              <h3 className='text-3xl font-[Skia] mb-4'>{data.name}</h3>
              <span>(Crypto web)</span>
              <p className='my-4 font-[Skia]'>{data.description}</p>
              <ul className='w-full flex gap-2 mt-2 font-[American Typewriter]'>
                  {data.skills.map((item,idxx)=>(
                    <li>
                    <h5 key={idxx} className='border-2 capitalize font-[American_Typewriter] border-emerald-700 rounded-4xl px-3 py-1'>{item}</h5>
                  </li>
                  ))}
              </ul>
            </div>
        </div>
        ))}




        


            
    </div>
  
    </>
  )
}

export default Page2