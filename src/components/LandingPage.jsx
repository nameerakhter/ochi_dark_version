import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full bg-zinc-900 pt-2"
    >
      <div className="textstructure mt-32 px-5 md:mt-52 md:px-20">
        {[
          "We create",
          "Eye-opening",
          "Presentations",
        ].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex flex-col md:flex-row">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: "clamp(10vw, 9vw, 9vw)",
                    }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    className="mr-[1vw] w-[50vw] md:w-[8vw] mt-[1vw] rounded top-[1.2vw]"
                  >
                    <motion.img
                      className="max-w-[40vw] h-auto w-full md:h-[6vw] rounded"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt="home"
                    />
                  </motion.div>
                )}
                <h1
                  className='uppercase text-[12vw] leading-[12vw] md:text-[7.5vw] md:leading-[7vw] tracking-tighter font-["Test Founders Grotesk X-Cond_SmSemi Bold"] font-medium'
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-10 md:mt-20 flex flex-col md:flex-row justify-between items-center py-5 px-5 md:px-20">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p
              key={index}
              className="text-sm md:text-md font-light tracking-tighter text-center md:text-left"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="start flex items-center gap-5 mt-5 md:mt-0">
          <div className="px-4 py-2 md:px-5 md:py-2 border-[1px] border-zinc-500 rounded-full uppercase font-light text-sm md:text-md">
            START THE PROJECT
          </div>
          <div className="px-4 py-2 md:px-5 md:py-2 border-[1px] border-zinc-500 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
