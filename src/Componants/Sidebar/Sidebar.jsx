import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={` bg-[#0b3366] w-[290px]   min-h-screen ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex py-6 pb-8 px-10 '>
          <img className='w-3/4' src=".././logo.png" alt="logo" />
        </div>
        <div className=' flex flex-col gap-3 px-10 text-white justify-center px-'>
          <div className='flex gap-2 py-1' >
            <img className='w-6 h-6' src="/.././dashbord.png" alt="d" />
            <p className='mx-2 text-sm'>Dashboard</p>
          </div>
          <div className='flex gap-2 py-1'>
            <img className='w-6 h-6' src="/.././compaigns.png" alt="d" />
            <p className='mx-2 text-sm'>Compaigns</p>
          </div>
          <div className='flex gap-2 py-1'>
            <img className='w-6 h-6' src="/.././commands.png" alt="d" />
            <p className='mx-2 text-sm'>Commands</p>
          </div>
          <div className='flex gap-2 py-1 '>
            <img className='w-6 h-6' src="/.././zones.png" alt="d" />
            <p className='mx-2 text-sm'>zones</p>
          </div>
          <div className='flex gap-2 py-1'>
            <img className='w-6 h-6' src=".././channels.png" alt="d" />
            <p className='mx-2 text-sm'>Channels</p>
          </div>
          <div className='flex gap-2 py-1'>
            <img className='w-6 h-6' src=".././devices.png" alt="d" />
            <p className='mx-2 text-sm'>Devices</p>
          </div>
          <div className='flex gap-2 py-1'>
            <img className='w-6 h-6' src=".././medialibrary.png" alt="d" />
            <p className='mx-2 text-sm'>Media Library</p>
          </div>
          <div className='flex gap-2 py-1 '>
            <img className='w-6 h-6' src=".././history.png" alt="d" />
            <p className='mx-2 text-sm'>History</p>
          </div>
        </div>

      </div>

      {isOpen ?
      <button
      style={{borderRadius:"10px 0 0 10px"}}
      className={`fixed top-72 left-0  md:left-56 bg-white py-5`}
      onClick={toggleDrawer}
    >
      <AiOutlineArrowLeft />
    </button>
       :
       <button
       style={{borderRadius:"0 10px 10px 0"}}
       className={`fixed top-72 text-white left-0 bg-[#0b3366] py-5 `}
       onClick={toggleDrawer}
     >
       <AiOutlineArrowRight />
     </button> 
      }
    </>
  )
}

export default Sidebar