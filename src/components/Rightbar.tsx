import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import { FiPercent } from 'react-icons/fi'
import ActionIcon from './ActionIcon'

const Rightbar = () => {
  return (
    <div className='flex flex-col items-center justify-between px-8 py-6'>
      <div className='octagon bg-[#92B6CC] p-[9px]'>
        <FiPercent size={28} color='white' />
      </div>
      <ActionIcon>
        <IoBagHandleOutline size={32} />
      </ActionIcon>
      <div className='h-[176px] text-end' style={{ writingMode: 'vertical-lr' }}>
        Cart is empty
      </div>
    </div>
  )
}

export default Rightbar
