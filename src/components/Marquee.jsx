import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.05"
      className="w-full rounded-tl-3xl rounded-tr-3xl bg-[#004D43] py-20"
    >
      <div className="text flex overflow-hidden whitespace-nowrap border-b-2 border-t-2 border-zinc-300 pr-10 tracking-tighter">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 5 }}
          className='font-["Test Founders Grotesk X-Cond Sm Semi Bold"] -mb-[1vw] -mt-[2vw] pt-1 text-[20vw] font-bold uppercase leading-none'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 5 }}
          className='font-["Test Founders Grotesk X-Cond Sm Semi Bold"] -mb-[1vw] -mt-[2vw] pt-1 text-[20vw] font-bold uppercase leading-none'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 5 }}
          className='font-["Test Founders Grotesk X-Cond Sm Semi Bold"] -mb-[1vw] -mt-[2vw] pt-1 text-[20vw] font-bold uppercase leading-none'
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
