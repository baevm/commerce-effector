import Image from 'next/image'
import { useState } from 'react'
import Layout from '../components/Layout'
import SneakerGrid from '../components/SneakerGrid'

const sneakers = [
  {
    id: 1,
    url: 'https://cdn.shopify.com/s/files/1/0641/4381/8989/products/air-jordan-1-low-mocha-1-1000_800x.png?v=1659353801',
    color: '#D7C4EB',
    label: 'Air Jordan 1 Low Mocha',
    price: 150,
  },
  {
    id: 2,
    url: 'https://cdn.shopify.com/s/files/1/0641/4381/8989/products/nike-dunk-low-racer-blue-white-1-1000_900x.png?v=1660737658',
    color: '#FFEEB1',
    label: 'Nike Dunk Low Racer Blue',
    price: 179,
  },
  {
    id: 3,
    url: 'https://cdn.shopify.com/s/files/1/0641/4381/8989/products/nike-dunk-low-rose-whisper-1-1000_600x.png?v=1660576566',
    color: '#F3F3F5',
    label: 'Nike Dunk Low Rose Whisper',
    price: 199,
  },
  {
    id: 4,
    url: 'https://cdn.shopify.com/s/files/1/0641/4381/8989/products/nike-dunk-low-goldenrod-1-1000_800x.png?v=1658844459',
    color: '#FFCED3',
    label: 'Nike Dunk Low Goldenrod',
    price: 199,
  },
  {
    id: 5,
    url: 'https://cdn.shopify.com/s/files/1/0641/4381/8989/products/nike-dunk-low-next-nature-vast-grey-1-1000_900x.png?v=1660742406',
    color: '',
    label: 'Nike Dunk Low Next Nature',
    price: 199,
  },
  {
    id: 6,
    url: 'https://cdn.shopify.com/s/files/1/0641/4381/8989/products/nike-air-force-1-low-supreme-box-logo-white-1-1000_800x.png?v=1651327806',
    color: '',
    label: 'Nike Air Force 1 Low Supreme',
    price: 230,
  },
  {
    id: 7,
    url: 'https://cdn.shopify.com/s/files/1/0641/4381/8989/products/nike-dunk-high-chocolate-1-1000_800x.png?v=1660576907',
    color: '',
    label: 'Nike Dunk High Chocolate',
    price: 199,
  },
  {
    id: 8,
    url: 'https://cdn.shopify.com/s/files/1/0641/4381/8989/products/air-jordan-1-low-mocha-1-1000_800x.png?v=1659353801',
    color: '',
    label: 'Air Jordan 1 Low Mocha',
    price: 199,
  },
  {
    id: 9,
    url: 'https://cdn.shopify.com/s/files/1/0641/4381/8989/products/nike-dunk-low-racer-blue-white-1-1000_900x.png?v=1660737658',
    color: '',
    label: 'Nike Dunk Low Racer Blue',
    price: 150,
  },
  {
    id: 10,
    url: 'https://cdn.shopify.com/s/files/1/0641/4381/8989/products/nike-dunk-low-rose-whisper-1-1000_600x.png?v=1660576566',
    color: '',
    label: 'Nike Dunk Low Rose Whisper',
    price: 199,
  },
  {
    id: 11,
    url: 'https://cdn.shopify.com/s/files/1/0641/4381/8989/products/nike-dunk-low-goldenrod-1-1000_800x.png?v=1658844459',
    color: '',
    label: 'Nike Dunk Low Goldenrod',
    price: 199,
  },
  {
    id: 12,
    url: 'https://cdn.shopify.com/s/files/1/0641/4381/8989/products/nike-dunk-low-next-nature-vast-grey-1-1000_900x.png?v=1660742406',
    color: '',
    label: 'Nike Dunk Low Next Nature',
    price: 199,
  },
]

export default function Home() {
  const [page, setPage] = useState(1)

  return (
    <Layout>
      <div className=' flex h-full w-full flex-col lg:flex-row'>
        <div className='relative h-full w-full bg-blue-200 lg:w-1/2'>
          <div className='relative h-full w-full min-w-[300px]'>
            <Image
              src='https://cdn.shopify.com/s/files/1/0641/4381/8989/products/nike-dunk-low-next-nature-lilac-w-1-1000_800x.png?v=1659357961'
              style={{ objectFit: 'contain' }}
              fill
              alt='sneaker'
              quality={100}
            />
            <div className='absolute bottom-[20%] right-[20%]'>Sneaker name here</div>
          </div>
        </div>

        <SneakerGrid sneakers={sneakers.slice(0, 4)} />
      </div>
    </Layout>
  )
}
