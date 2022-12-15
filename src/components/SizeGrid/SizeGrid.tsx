import React from 'react'
import ISneaker from '../../types/sneaker'
import SizeItem from './SizeItem'

const sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5]



const SizeGrid = ({
  sneaker,
  selectedSize,
  setSelectedSize,
  sizeError,
}: {
  sneaker: ISneaker
  selectedSize: number | null
  setSelectedSize: (v: number) => void
  sizeError: boolean
}) => {
  return (
    <div className='pt-8'>
      <div className={`pb-1 ${sizeError ? 'text-red-600' : 'text-black'}`}>Select size</div>
      <div className={`grid grid-cols-2 grid-rows-6 gap-2  ${sizeError ? 'border-[1px] border-red-600' : ''}`}>
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
  )
}

export default SizeGrid
