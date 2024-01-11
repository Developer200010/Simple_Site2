import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"

import Card from './Card'

function Forground() {
  const ref= useRef(null);
  const data=[
    {
      desc:"this is good",
      size: "0.9mb",
      close: false,
      tag: {
        isOpen:true,
        tagTitle:"Downlaod now",
        tagColor: "green"
      }
    },
    {
      desc:"this is good",
      size: "0.9mb",
      close: false,
      tag: {
        isOpen:true,
        tagTitle:"Downlaod now",
        tagColor: "blue"
      }
    },
    {
      desc:"this is good",
      size: "0.9mb",
      close: false,
      tag: {
        isOpen:true,
        tagTitle:"Downlaod now",
        tagColor: "green"
      }
    }
  ];
  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex flex-wrap gap-10 p-5  '>
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}
    
   </div>
  )
}

export default Forground