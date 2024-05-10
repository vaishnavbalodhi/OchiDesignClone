import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Landing = () => {
  return (
    <div className='w-full h-screen pt-1'>
        <div className='textstructure mt-36 px-10'>
            <div className="masker font-foundersgrotesk">
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                  return (
                    <div className='masker'>
                      <div className='w-fit flex items-center overflow-hidden'>
                        {index === 1 && (<div className='mr-[1vw] w-[10vw] h-[11vh]'><img className='rounded-md' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></div>)}
                        <h1 key={index} className='uppercase text-[7vw] leading-none tracking-tighter font-semibold'>{item}</h1>
                      </div>
                    </div>
                  )
                })} 
                {/* check reference */}
            </div>
        </div>
          <div className='border-t-[1px] border-zinc-800 mt-24 flex justify-between'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (<p className='tracking-tight px-10 py-5 font-light leading-none'>{item}</p>))}
            <div className='start flex items-center gap-1.5'>
              <div className='border-[1px] border-zinc-400 px-3.5 py-1.5 my-4 uppercase text-sm rounded-full'>Start the project</div>
              <div className='mr-8 w-10 h-10 border-[1px] border-zinc-400 rounded-full flex items-center justify-center'><GoArrowUpRight /></div>
            </div>
          </div>
    </div>
  )
}

export default Landing