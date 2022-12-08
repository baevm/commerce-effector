import Image from 'next/image'
import React, { useState } from 'react'

const SneakerItem = ({ sneaker }: any) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div
      className={`relative`}
      style={{ backgroundColor: sneaker.color }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      {isHover && (
        <div className='absolute top-8 left-16 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white opacity-20 shadow-xl'>
          {sneaker.price} $
        </div>
      )}
      <Image src={sneaker.url} style={{ objectFit: 'contain' }} fill alt={sneaker.label} />
      {isHover && <div className='absolute bottom-4 left-0 right-0 ml-auto mr-auto text-center'>{sneaker.label}</div>}
    </div>
  )
}

export default SneakerItem
