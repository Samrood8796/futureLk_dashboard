import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {VscBellDot} from 'react-icons/vsc'
import {SlEarphonesAlt} from 'react-icons/sl'
const Navbar = () => {
  return (
    <div className='bg-white h-[68px]'>
        <div className='flex gap-3 justify-center md:justify-end py-6 items-center pr-5 '>
          <div className='h-8 w-8  text-[#5160a2' >
        <AiOutlineUser/>
          </div>
          <div className='h-8 w-8  text-[#5160a2'>
        <VscBellDot/>
          </div>
          <div className='h-8 w-8 text-[#5160a2]'>
        <SlEarphonesAlt/>
          </div>
        </div>
    </div>
  )
}

export default Navbar