import { motion } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap";

const Featured = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full py-20 ">
      <div className="px-20 w-full border-b-[1px] border-zinc-800 pb-20 ">
        <h1 className='text-9xl font-["Neue Montreal Regular"] tracking-tighter'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="card_container w-1/2  h-[75vh] relative"
          >
            <h1 className="absolute flex left-full z-[9] text-9xl font-['Neue Montreal Regular'] leading-none tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={hover ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="card_container relative w-1/2  h-[75vh] "
          >
            <h1 className="absolute flex right-full z-[9] text-9xl font-['Neue Montreal Regular'] leading-none tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2  text-[#CDEA68]">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={hover ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
