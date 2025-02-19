import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Navbar(){
  return (
    <div className='w-full absolute flex items-center justify-end px-11 py-20 z-10 '>
        <button className='bg-emerald-600 hover:bg-transparent rounded-full text-black font-bold text-xl border-3 px-6 py-2 duration-700'>Hire me</button>
        {/* <i className="ri-menu-line text-4xl ml-3 border-2 rounded-xl"></i> */}

    </div>
  )
}

export default Navbar