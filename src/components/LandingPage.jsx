import { motion } from 'framer-motion'
import { FaArrowUpLong } from 'react-icons/fa6'

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full bg-zinc-900 pt-2"
    >
      <div className="textstructure mt-32 px-5 md:mt-52 md:px-20">
        {['We create', 'Eye-opening', 'Presentations'].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="flex w-fit flex-col md:flex-row">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: 'clamp(10vw, 9vw, 9vw)',
                    }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    className="top-[1.2vw] mr-[1vw] mt-[1vw] w-[50vw] rounded md:w-[8vw]"
                  >
                    <motion.img
                      className="h-auto w-full max-w-[40vw] rounded md:h-[6vw]"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt="home"
                    />
                  </motion.div>
                )}
                <h1 className='font-["Test Founders Grotesk X-Cond_SmSemi Bold"] text-[12vw] font-medium uppercase leading-[12vw] tracking-tighter md:text-[7.5vw] md:leading-[7vw]'>
                  {item}
                </h1>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-10 flex flex-col items-center justify-between border-t-[1px] border-zinc-800 px-5 py-5 md:mt-20 md:flex-row md:px-20">
        <div className="flex flex-col gap-5 md:flex-row md:gap-10">
          {[
            'For public and private companies',
            'From the first pitch to IPO',
          ].map((item, index) => (
            <p
              key={index}
              className="md:text-md text-center text-sm font-light tracking-tighter md:text-left"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="start mt-5 flex items-center gap-5 md:mt-0">
          <div className="md:text-md rounded-full border-[1px] border-zinc-500 px-4 py-2 text-sm font-light uppercase md:px-5 md:py-2">
            START THE PROJECT
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-zinc-500 px-4 py-2 md:px-5 md:py-2">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
