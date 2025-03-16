import React, { useState } from 'react'
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
function Item({urlImg, name, time,...props}) {
    const [isSaved,setIsSaved] = useState(false)
  return (
    <div {...props} className='w-[270x] h-[300px] rounded-xl border-1 overflow-hidden border-gray-200'>
        <img src={urlImg} alt="" className='w-full h-auto min-h-[150px] max-h-[60%] object-cover' />
        <div className='p-4 '>
            <div className='flex justify-between'>
                <p className='font-bold max-w-[70%]'>{name}</p>
                <div className='p-2 rounded-full w-10 h-10 flex items-center justify-center border border-[#B30B46FF]' onClick={()=>{
                    setIsSaved((prev)=>!prev)
                }}>{isSaved? <FaBookmark color='#B30B46FF'></FaBookmark>: <FaRegBookmark color='#B30B46FF'></FaRegBookmark>}</div>
            </div>
            <div className='text-[#F44B87FF] bg-[#FBC8DAFF] text-sm font-bold w-fit px-1 rounded-xl mt-3'>{time}</div>
        </div>
      
    </div>
  )
}

export default Item
