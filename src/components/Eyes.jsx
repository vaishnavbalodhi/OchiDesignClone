import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate, setRotate] = useState(0);
    const dd=45;
    
    useEffect(() => {
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180)
        })
    })

  return (
    <div className='w-full h-screen overflow-hidden relative'>
        <div className='w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'></div>
        <div className='absolute top-1/3 left-1/3 flex gap-10'>
            <div className='w-48 h-48 rounded-full bg-zinc-100 flex items-center justify-center'>
                <div className='w-[60%] h-[60%] bg-zinc-900 rounded-full relative'>
                    {/* line for rotation */}
                    <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className={` w-[98%] h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]`}>
                        <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                    </div> 
                </div>
            </div>
            <div className='w-48 h-48 rounded-full bg-zinc-100 flex items-center justify-center'>
                <div className='w-[60%] h-[60%] bg-zinc-900 rounded-full relative'>
                    {/* line for rotation */}
                    <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='w-[98%] h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes