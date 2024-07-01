import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="font-['Neue Montreal Regular'] text-[4vw] leading-[4.5vw] tracking-tighter mb-[4vw]">
        Ochi is a strategic partner for fast-growning tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] mt-32 border-[#39411f]">
        <div className="w-1/2 ">
          <h1 className="text-6xl"> Our approach:</h1>
          <button className="px-8 py-4 bg-zinc-900 text-white rounded-full tex-[4vw]">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
