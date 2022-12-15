import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import data from '../../public/data.json'
import AppLayout from '../components/Layouts/AppLayout'
import LeftAnimLayout from '../components/Layouts/LeftAnimLayout'
import RightAnimLayout from '../components/Layouts/RightAnimLayout'
import SizeGrid from '../components/SizeGrid/SizeGrid'
import { addToCart } from '../store/cart'
import ISneaker from '../types/sneaker'

const SneakerPage = ({ sneaker }: { sneaker: ISneaker }) => {
  const [sizeError, setSizeError] = React.useState<boolean>(false)
  const [selectedSize, setSelectedSize] = React.useState<number | null>(null)

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
    <AppLayout>
      <div className='flex h-full w-full'>
        <LeftAnimLayout>
          <div className='h-full w-full' style={{ backgroundColor: sneaker?.color }}>
            <Image src={sneaker?.image_url} style={{ objectFit: 'contain' }} fill alt={sneaker.label} quality={100} />
          </div>
        </LeftAnimLayout>

        <RightAnimLayout>
          <div className='h-full w-full border-l-[1px] bg-[#F3F3F5] px-12 py-24'>
            <div>
              <h1 className='text-2xl font-semibold'>{sneaker?.label}</h1>
              <h3>${sneaker?.price}</h3>
            </div>
            <SizeGrid
              sneaker={sneaker}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              sizeError={sizeError}
            />
            <div className='pt-8'>
              <button
                onClick={handleAddToCart}
                className='rounded-full bg-black py-4 px-8 text-white shadow-xl active:scale-[98%]'>
                Add to cart
              </button>
            </div>
          </div>
        </RightAnimLayout>
      </div>
    </AppLayout>
  )
}

export const getStaticProps: GetStaticProps = (ctx) => {
  const sneakerId = ctx.params?.sneakerId

  const sneaker = data.sneakers.find((sneaker) => sneaker.id === +sneakerId!) as ISneaker

  return {
    props: { sneaker },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = data.sneakers.map((sneaker) => sneaker.id)

  return {
    paths: paths.map((id) => ({ params: { sneakerId: id.toString() } })),
    fallback: false,
  }
}

export default SneakerPage
