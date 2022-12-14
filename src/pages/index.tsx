import Image from 'next/image'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import SneakerGrid from '../components/SneakerGrid/SneakerGrid'
import data from '../../public/data.json'
import Link from 'next/link'

export default function Home() {
  const sneakersPerPage = 4
  const pageAmount = Math.ceil(data.sneakers.length / sneakersPerPage)
  const [currPage, setCurrPage] = useState(1)
  const sneakers = data.sneakers

  const mainSneaker = sneakers[0]
  const sneakersMap = sneakers.slice(currPage * sneakersPerPage - sneakersPerPage + 1, currPage * sneakersPerPage + 1)

  return (
    <Layout>
      <div className='flex h-full w-full flex-col lg:flex-row'>
        <div className='relative h-full w-full lg:w-1/2' style={{ backgroundColor: mainSneaker.color }}>
          <div className='relative h-full w-full min-w-[300px]'>
            <Image src={mainSneaker.image_url} style={{ objectFit: 'contain' }} fill alt='sneaker' quality={100} />
            <Link href={`/${mainSneaker.id}`}>
              <div className='text-c absolute bottom-[20%] right-[10%] text-gray-700'>{mainSneaker.label}</div>
            </Link>
          </div>
        </div>

        <SneakerGrid sneakers={sneakersMap} pageAmount={pageAmount} currPage={currPage} setCurrPage={setCurrPage} />
      </div>
    </Layout>
  )
}
