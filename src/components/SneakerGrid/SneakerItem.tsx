import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { IoBagAdd, IoBagCheck } from 'react-icons/io5'
import { addToCart } from '../../store/cart'
import ISneaker from '../../types/sneaker'

const SneakerItem = ({ sneaker }: { sneaker: ISneaker }) => {
  const [isHover, setIsHover] = useState(false)
  const router = useRouter()

  const handleAddToCart = (sneaker: ISneaker) => {
    console.log(sneaker)
    addToCart(sneaker)
  }

  return (
    <div
      className='relative cursor-pointer '
      style={{ backgroundColor: sneaker.color }}
      onClick={() => router.push(`/${sneaker.id}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      {isHover && (
        <div className='mt-6 ml-8 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white opacity-20 shadow-xl'>
          {sneaker.price} $
        </div>
      )}
      <Image src={sneaker.image_url} style={{ objectFit: 'contain' }} fill alt={sneaker.label} />
      {isHover && (
        <div className='absolute bottom-4 left-0 right-0 ml-auto mr-auto text-center text-gray-700'>
          {sneaker.label}
        </div>
      )}
    </div>
  )
}

export default SneakerItem
