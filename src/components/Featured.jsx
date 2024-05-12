import React from 'react'

const Featured = () => {
  return (
    <div className='w-full text-zinc-100 font-neue'>
        <div className='text-5xl px-10 pt-24 pb-12 tracking-wider border-b-[1px] border-zinc-700'>
            <h1>Featured projects</h1>
        </div>
        <div className='w-full p-10 grid grid-cols-2 gap-5 relative'>
            <div>
                <div className='pb-4 flex gap-2 items-center'>
                    <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
                    <div className='text-sm'>FYDE</div>
                </div>
                
                <div className='w-full h-[70vh] rounded-lg overflow-hidden hover:scale-95 duration-300'>
                    <div className='absolute top-1/2 left-1/2 z-10 -translate-x-[50%] -translate-y-[50%] hidden'>
                        <h1 className='text-8xl uppercase tracking-tighter font-semibold font-foundersgrotesk text-[#CDEA68]'>FYDE</h1>
                    </div>
                    <img className="w-full h-full object-cover rounded-lg" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
            </div>
            <div>
                <div className='pb-4 flex gap-2 items-center'>
                    <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
                    <div className='text-sm'>VISE</div>
                </div>
                <div className='w-full h-[70vh] rounded-lg overflow-hidden hover:scale-95 duration-300'>
                    <div className='absolute top-1/2 left-1/2 z-0 -translate-x-[50%] -translate-y-[50%]'>
                        <h1 className='text-8xl uppercase tracking-tighter font-semibold font-foundersgrotesk text-[#CDEA68]'>VISE</h1>
                    </div>
                    <img className="w-full h-full object-cover rounded-lg" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured