import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
      <div className='textstructure mt-52 px-20'>
        {["We create","Eye-opening", "Presentations"].map((item,index) =>{
            return (<div className="masker ">
              <div className='w-fit flex '> 
              {index === 1 && (<div className='mr-[1vw] w-[8vw] rounded h-[6vw] top-[1.2vw] bg-red-500'></div>)}
                        <h1 className='uppercase text-[7.5vw] leading-[7vw] tracking-tighter font-["Test Founders Grotesk X-Cond_SmSemi Bold"] font-medium md:text-[5.5vw]'>
                            {item}
                        </h1>
                        </div>
                    </div>)
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {["For public and private companies","From the first pitch to IPO"].map((item, index) =>(<p className='text-md font-light tracking-tighter'>{item}</p>))}
        <div className="start flex items-center gap-5">
            <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full uppercase capitalize font-light text-md">
              START THE PROJECT 
            </div>
            <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full w-10 h-10 flex items-center justify-center ">
                <span className='rotate-[45deg]'>
                    < FaArrowUpLong />
                </span>
            </div>
      </div>  
      </div>  
      
    </div>
  )
}

export default LandingPage
