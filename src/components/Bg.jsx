import React from 'react'

function Bg() {
  return (
    <>
        <div className='fixed z-[2] w-full h-screen'>
      <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-900 text-semibold text-xl '>Documents</div>
      <h1 className='absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-200'>docs.</h1>
      </div>
    </>
  )
}

export default Bg