import React from 'react'
import Bg from './components/Bg'
import Forground from './components/Forground'

function App() {
  return (
   <>
    <div className='relative w-full h-screen bg-zinc-800'>
   <Bg/>
   <Forground/>
   </div>
   </>
  )
}

export default App