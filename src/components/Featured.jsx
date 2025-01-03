import { motion, useAnimation } from "framer-motion";

export default function Featured(){
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10">
      <div className="px-8 md:px-16 lg:px-20 w-full border-b-[1px] border-zinc-800 pb-10 md:pb-16 lg:pb-20">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-['Neue Montreal Regular'] tracking-tighter">
          Featured projects
        </h1>
      </div>
      <div className="px-8 md:px-16 lg:px-20">
        <div className="cards w-full flex flex-col md:flex-row gap-6 md:gap-10 mt-8 md:mt-10">
          {/* Card 1 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card_container w-full md:w-1/2 h-[50vh] md:h-[65vh] lg:h-[75vh] relative"
          >
            <h1 className="absolute flex left-full z-[9] text-5xl md:text-7xl lg:text-9xl font-['Neue Montreal Regular'] leading-none tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
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
                alt="FYDE"
              />
            </div>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card_container w-full md:w-1/2 h-[50vh] md:h-[65vh] lg:h-[75vh] relative bg-gray-900"
          >
            <h1 className="absolute flex overflow-hidden right-full z-[9] text-5xl md:text-7xl lg:text-9xl font-['Neue Montreal Regular'] leading-none tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
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
                alt="VISE"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}