import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  return (
    <div className='w-full absolute flex items-center justify-end px-11 py-20 z-10 '>
        <button className='bg-black hover:bg-transparent  rounded-full text-white text-xl border-4 px-6 py-2 '>Hire me</button>
        <i className="ri-menu-line text-4xl ml-3 border-2 rounded-xl"></i>

    </div>
  )
}

export default Navbar