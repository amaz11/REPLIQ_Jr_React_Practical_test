import React, { useState } from 'react'

const Modal = ({btn, children}) => {
    const [modal,setModal] = useState(false)
  return (
    <div>
        <button className='bg-green-700 hover:bg-green-600 px-4 py-1 rounded text-white font-semibold' onClick={()=>{setModal(!modal)}}>{btn}</button>
        {
            modal ?<>
            <div className='bg bg-white absolute z-40  left-[45%] p-3 border-1 rounded'>
               {children}
            </div>
            <div className='bg-[#00000048] absolute w-full h-full top-0 left-0 z-30' onClick={()=>{setModal(!modal)}}></div>
            </>:null
        }
    </div>
  )
}

export default Modal