import React from 'react'

const About = () => {
  return (
    <div className='w-full bg-[#CDEA68] rounded-xl font-neue'>
      <h1 className='text-black text-5xl mr-28 pt-20 px-10'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='mt-14 border-t-[1px] border-[#99AD53] px-10 py-5'>
        <div className='flex justify-between pb-16'>
          <div>
            <h1 className='text-black text-5xl'>Our approach:</h1>
            <button className='bg-black rounded-full mt-5 uppercase p-4 text-sm flex gap-10 items-center'> Read More
              <div className='w-3 h-3 rounded-full bg-zinc-50'></div>
            </button>
          </div>
          <div className='w-1/2 h-[400px] bg-red-400 rounded-xl'>
            <img className='overflow-hidden object-cover rounded-xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About