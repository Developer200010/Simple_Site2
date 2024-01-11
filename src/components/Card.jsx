import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { motion } from "framer-motion"

import { MdOutlineFileDownload } from "react-icons/md";

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className='relative w-60 h-72 rounded-[50px] bg-zinc-900 text-white py-10 px-8 overflow-hidden'>
<FaFileAlt />
<p className='text-xs mt-5 font-semibold leading-tight'>{data.desc}</p>
<div className='footer absolute  w-full h-10  bottom-0 top-48 left-0'>
    <div className='flex items-center justify-between px-8'>
        <h5>{data.size}</h5>
        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
          {data.close? <FaRegWindowClose />
:         <MdOutlineFileDownload size='.7em' color='#000' />
}
        </span>
         </div>  
         {data.tag.isOpen &&
          (<div className={`tag flex w-full h-14 ${data.tag.tagColor =="blue" ? "bg-blue-600" : "bg-green-600"} mb-10 items-center justify-center mt-4`}>
<h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
</div>)}

</div>
    </motion.div>
  )
}

export default Card