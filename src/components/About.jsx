import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from 'react';
    
const About = () => {
    
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="font-['Neue Montreal Regular'] text-[4vw] leading-[4.5vw] tracking-tighter mb-[4vw]">
        Ochi is a strategic partner for fast-growning tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] mt-30 border-[#39411f]  pt-10 flex gap-5 ">
        <div className="w-1/2 ">
          <h1 className="text-6xl"> Our approach:</h1>
          <button className="px-8 py-4 uppercase gap-10 mt-10 bg-zinc-900 text-white rounded-full tex-[4vw] flex items-center justify-between">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 bg-[#97b626] h-[50vh] rounded-3xl">
            <img className="image w-full bg-cover rounded-3xl"src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="about" />
        </div>
      </div>
    </div>
  );
}

export default About;
