import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div className='w-full pt-24 pb-12 bg-[#004D43] rounded-t-xl'>
        <div className='border-t-2 border-b-2 border-[#1F625A] flex font-foundersgrotesk whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[24vw] font-bold uppercase leading-none tracking-tighter -my-6'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[24vw] font-bold uppercase leading-none tracking-tighter -my-6'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[24vw] font-bold uppercase leading-none tracking-tighter -my-6'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee