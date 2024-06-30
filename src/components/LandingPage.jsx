import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
      <div className='textstructure mt-52 px-20'>
        {["We create","Eye-opening", "Presentations"].map((item,index) =>{
            return <div className="masker ">
            <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-["Test Founders Grotesk X-Cond_SmSemi Bold"] font-medium md:text-[5.5vw]'>{item}</h1>
        </div>
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {["For public and private companies","From the first pitch to IPO"].map((item, index) =>(<p className='text-md font-light tracking-tighter'>{item}</p>))}
      </div>
    </div>
  )
}

export default LandingPage
