import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout'
import data from '../../public/data.json'
import { useRouter } from 'next/router'
import ISneaker from '../types/sneaker'

const SneakerPage = () => {
  const router = useRouter()
  const { sneakerId } = router.query

  const sneaker = data.sneakers.find((sneaker) => sneaker.id === +sneakerId!) as ISneaker

  return (
    <Layout>
      <div className='flex h-full w-full'>
        <div className={`relative  h-full w-full lg:w-1/2`} style={{ backgroundColor: sneaker?.color }}>
          <div className='relative h-full w-full min-w-[300px]'>
            <Image src={sneaker?.image_url} style={{ objectFit: 'contain' }} fill alt='sneaker' quality={100} />
            <div className='text-c absolute bottom-[20%] right-[10%] text-gray-700'>{sneaker?.label}</div>
          </div>
        </div>
        <div className='z-50 h-full w-full bg-white lg:w-1/2'>test</div>
      </div>
    </Layout>
  )
}

export default SneakerPage
