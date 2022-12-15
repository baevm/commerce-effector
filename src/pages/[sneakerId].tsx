import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout'
import data from '../../public/data.json'
import { useRouter } from 'next/router'
import ISneaker from '../types/sneaker'
import { addToCart } from '../store/cart'

const sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5]

const SizeItem = ({
  size,
  avaliableSizes,
  selectedSize,
  setSelectedSize,
}: {
  size: number
  avaliableSizes: number[]
  selectedSize: number | null
  setSelectedSize: (num: number) => void
}) => {
  if (avaliableSizes?.includes(size)) {
    return (
      <div
        onClick={() => setSelectedSize(size)}
        className={`flex cursor-pointer justify-center rounded-sm border-[1px] bg-white p-2 ${
          selectedSize === size ? 'border-black' : 'border-gray-200'
        }`}>
        {size}
      </div>
    )
  } else {
    return (
      <div className='flex justify-center rounded-sm border-[1px] border-gray-200 bg-[#F7F7F7] p-2 text-[#DDDDDD]'>
        {size}
      </div>
    )
  }
}

const SneakerPage = () => {
  const [sizeError, setSizeError] = React.useState<boolean>(false)
  const [selectedSize, setSelectedSize] = React.useState<number | null>(null)
  const router = useRouter()
  const { sneakerId } = router.query

  const sneaker = data.sneakers.find((sneaker) => sneaker.id === +sneakerId!) as ISneaker

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ sneaker: sneaker, size: selectedSize })
      setSizeError(false)
      setSelectedSize(null)
    } else {
      setSizeError(true)
    }
  }

  return (
    <Layout>
      <div className='flex h-full w-full'>
        <div className={`relative  h-full w-full lg:w-1/2`} style={{ backgroundColor: sneaker?.color }}>
          <div className='relative h-full w-full min-w-[300px]'>
            <Image src={sneaker?.image_url} style={{ objectFit: 'contain' }} fill alt='sneaker' quality={100} />
          </div>
        </div>
        <div className='z-50 h-full w-full bg-[#F3F3F5] px-12 py-24 lg:w-1/2'>
          <div>
            <h1 className='text-2xl font-semibold'>{sneaker?.label}</h1>
            <h3>${sneaker?.price}</h3>
          </div>

          <div className='pt-8'>
            <div className={`pb-1 ${sizeError ? 'text-red-600' : 'text-black'}`}>Select size</div>
            <div className={`grid grid-cols-2 grid-rows-6 gap-2 border-[1px] ${sizeError ? 'border-red-600' : ''}`}>
              {sizes.map((size) => (
                <SizeItem
                  size={size}
                  avaliableSizes={sneaker?.size}
                  key={size}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />
              ))}
            </div>
          </div>

          <div className='pt-8'>
            <button onClick={handleAddToCart} className='rounded-full bg-black py-4 px-8 text-white'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SneakerPage
