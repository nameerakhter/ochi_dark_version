
export  default function About(){
    
  return (
    <div className="w-full p-10 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue Montreal Regular'] text-[6vw] md:text-[4vw] leading-[6vw] md:leading-[4.5vw] tracking-tighter mb-10 md:mb-[4vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] mt-10 md:mt-30 border-[#39411f] pt-10 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl mb-5">Our approach:</h1>
          <button className="px-6 py-3 md:px-8 md:py-6 uppercase gap-5 md:gap-10 mt-5 md:mt-10 bg-zinc-900 text-white rounded-full text-sm md:text-[2vw] flex items-center justify-between">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-full md:w-1/2 bg-[#97b626] h-[40vh] md:h-[50vh] rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="about"
          />
        </div>
      </div>
      </div>
  );
}