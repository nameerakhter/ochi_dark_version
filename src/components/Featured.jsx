import { motion, useAnimation } from 'framer-motion'

export default function Featured() {
  const cards = [useAnimation(), useAnimation()]

  const handleHover = (index) => {
    cards[index].start({ y: '0' })
  }
  const handleHoverEnd = (index) => {
    cards[index].start({ y: '100%' })
  }

  return (
    <div className="w-full py-10">
      <div className="w-full border-b-[1px] border-zinc-800 px-8 pb-10 md:px-16 md:pb-16 lg:px-20 lg:pb-20">
        <h1 className="font-['Neue Montreal Regular'] text-5xl tracking-tighter md:text-7xl lg:text-9xl">
          Featured projects
        </h1>
      </div>
      <div className="px-8 md:px-16 lg:px-20">
        <div className="cards mt-8 flex w-full flex-col gap-6 md:mt-10 md:flex-row md:gap-10">
          {/* Card 1 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card_container relative h-[50vh] w-full md:h-[65vh] md:w-1/2 lg:h-[75vh]"
          >
            <h1 className="font-['Neue Montreal Regular'] absolute left-full top-1/2 z-[9] flex -translate-x-1/2 -translate-y-1/2 overflow-hidden text-5xl leading-none tracking-tighter text-[#CDEA68] md:text-7xl lg:text-9xl">
              {'FYDE'.split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card h-full w-full overflow-hidden rounded-xl">
              <img
                className="h-full w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="FYDE"
              />
            </div>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card_container relative h-[50vh] w-full bg-gray-900 md:h-[65vh] md:w-1/2 lg:h-[75vh]"
          >
            <h1 className="font-['Neue Montreal Regular'] absolute right-full top-1/2 z-[9] flex -translate-y-1/2 translate-x-1/2 overflow-hidden text-5xl leading-none tracking-tighter text-[#CDEA68] md:text-7xl lg:text-9xl">
              {'VISE'.split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card h-full w-full overflow-hidden rounded-xl">
              <img
                className="h-full w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="VISE"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
