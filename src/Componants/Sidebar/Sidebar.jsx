import React from 'react'
const Sidebar = () => {
  return (
    <>
      <div className='bg-[#0b3366] w-[300px] flex flex-col min-h-screen'>
        <div className='flex py-6 pb-8 px-10 '>
          <img className='w-3/4' src=".././logo.png" alt="logo" />
        </div>
        <div className=' flex flex-col gap-3 px-10 text-white justify-center px-'>
          <div className='flex gap-2 py-1' >
            <img className='w-6 h-6' src=".././dashbord.png" alt="d" />
            <p className='mx-2 text-sm'>Dashboard</p>
          </div>
          <div className='flex gap-2 py-1'>
            <img className='w-6 h-6' src=".././compaigns.png" alt="d" />
            <p className='mx-2 text-sm'>Compaigns</p>
          </div>
          <div className='flex gap-2 py-1'>
            <img className='w-6 h-6' src=".././commands.png" alt="d" />
            <p className='mx-2 text-sm'>Commands</p>
          </div>
          <div className='flex gap-2 py-1 '>
            <img className='w-6 h-6' src=".././zones.png" alt="d" />
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
    </>
  )
}

export default Sidebar