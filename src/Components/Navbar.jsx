import React from 'react'

function Navbar() {
  return (
    <nav className='text-[#f8f9f4] w-full h-[12vh] flex justify-between items-center px-10'>
        <div className="logo text-xl font-semibold">FindNest</div>
        {/* 36525B */}
        <button className='text-emerald-900 bg-[#f8f9f4] font-semibold rounded-full px-5 pb-2 pt-2.5'>Get Started!</button>
    </nav>
  )
}

export default Navbar