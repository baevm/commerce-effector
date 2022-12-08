import React, { useState } from 'react'
import SneakerItem from './SneakerItem'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import ActionIcon from './ActionIcon'

const SneakerGrid = ({ sneakers }) => {
  const [pageType, setPageType] = useState<'new' | 'popular'>('new')

  return (
    <div className='z-50 h-full w-full lg:w-1/2'>
      <div className='grid h-full w-full grid-cols-2 grid-rows-3 gap-0'>
        {sneakers.map((sneaker: any) => (
          <SneakerItem sneaker={sneaker} key={sneaker.id} />
        ))}
        <div className='flex items-center justify-around text-4xl '>
          <ActionIcon>
            <IoArrowBack size={32} />
          </ActionIcon>
          <div className='mb-2'>
            <sup className='pr-[5px]'>1</sup>/<sub className='pl-[5px]'>3</sub>
          </div>
          <ActionIcon>
            <IoArrowForward size={32} />
          </ActionIcon>
        </div>

        <div className='flex items-center justify-center gap-4 bg-[#F3F3F5]'>
          <div
            onClick={() => setPageType('new')}
            className={` ${
              pageType === 'new' ? 'text-active underline underline-offset-8' : 'text-black'
            } cursor-pointer text-xl`}>
            New
          </div>
          <div
            onClick={() => setPageType('popular')}
            className={`${
              pageType === 'popular' ? 'text-active underline underline-offset-8' : 'text-black'
            } cursor-pointer text-xl`}>
            Popular
          </div>
        </div>
      </div>
    </div>
  )
}

export default SneakerGrid
