import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-speed="-.05" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] ">
      <div className="text flex border-t-2 border-b-2 whitespace-nowrap border-zinc-300 overflow-hidden pr-10 tracking-tighter">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[20vw] uppercase -mb-[1vw] -mt-[2vw] pt-1 leading-none font-["Test Founders Grotesk X-Cond Sm Semi Bold"] font-bold'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[20vw] uppercase -mb-[1vw] -mt-[2vw] pt-1 leading-none font-["Test Founders Grotesk X-Cond Sm Semi Bold"] font-bold'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[20vw] uppercase -mb-[1vw] -mt-[2vw] pt-1 leading-none font-["Test Founders Grotesk X-Cond Sm Semi Bold"] font-bold'
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
