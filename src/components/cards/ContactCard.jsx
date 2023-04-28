import React from 'react'
import { FaHome } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { MdWatchLater } from 'react-icons/md';
function ContactCard() {
  return (
<>
<div className='  w-full z-10 bg-[rgba(255,255,255,0.8)] '>
<div className='container mx-auto '>

    <div className='  flex justify-between px-12 '>
        <div className='flex align-middle items-center gap-4 py-10'>
            <div>
                <FaHome size={40} color='#838383' />
            </div>
            <div>
                <div className='text-[#838383] text-[16px]'>Visit our Location</div>
                <p className='text-[#bfbfbf] text-[14px]'>250 Main Street, New York</p>
            </div>
        </div>
        <div className='flex align-middle items-center gap-4 py-10'>
            <div>
                <MdWatchLater size={40} color='#838383' />
            </div>
            <div>
                <div className='text-[#838383] text-[16px]'>Visit our Location</div>
                <p className='text-[#bfbfbf] text-[14px]'>250 Main Street, New York</p>
            </div>
        </div>
        <div className='flex align-middle items-center gap-4 py-10'>
            <div>
                <IoMdCall size={40} color='#838383' />
            </div>
            <div>
                <div className='text-[#838383] text-[16px]'>Visit our Location</div>
                <p className='text-[#bfbfbf] text-[14px]'>250 Main Street, New York</p>
            </div>
        </div>
        <div className='flex align-middle items-center gap-4 py-10'>
            <div>
                <MdEmail size={40} color='#838383' />
            </div>
            <div>
                <div className='text-[#838383] text-[16px]'>Visit our Location</div>
                <p className='text-[#bfbfbf] text-[14px]'>250 Main Street, New York</p>
            </div>
        </div>
    </div>
</div>
</div>
</>
  )
}

export default ContactCard
