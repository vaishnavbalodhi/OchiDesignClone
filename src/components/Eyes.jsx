import React from 'react'

const Eyes = () => {
  return (
    <div className='w-full h-screen overflow-hidden relative'>
        <div className='w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'></div>
        <div className='absolute top-1/3 left-1/3 flex gap-10'>
            <div className='w-48 h-48 rounded-full bg-zinc-100 flex items-center justify-center'>
                <div className='w-[60%] h-[60%] bg-zinc-900 rounded-full flex justify-center items-center'>
                    {/* line for rotation */}
                    <div className='w-[96%] h-5'>
                        <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                    </div> 
                </div>
            </div>
            <div className='w-48 h-48 rounded-full bg-zinc-100 flex items-center justify-center'>
                <div className='w-[60%] h-[60%] bg-zinc-900 rounded-full flex justify-center items-center'>
                    {/* line for rotation */}
                    <div className='w-[96%] h-5'>
                        <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes