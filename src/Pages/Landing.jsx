import React from 'react'
import Navbar from '../Components/Navbar'

function Landing() {
    return (
        <>
        <Navbar/>
            <div className="hero-container fixed bottom-20 left-20">
                <div className='font-semibold text-7xl leading-[1.2] text-[#F8F9F4]'>Finding<br/>Hotels?</div>
                <div className="caption my-5 text-sm w-[19rem] leading-normal text-[#f8f9f4]">Find your perfect stay with personalized hotel recommendations tailored to your preferences. Your ideal accommodation awaits. Start exploring now!</div>
                {/* <button className='text-emerald-900 bg-[#f8f9f4] font-semibold rounded-full px-5 pb-2 pt-2.5'>Get Started!</button> */}
            </div>
        </>
    )
}

export default Landing