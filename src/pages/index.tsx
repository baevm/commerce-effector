import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import data from '../../public/data.json'
import AppLayout from '../components/Layouts/AppLayout'
import LeftAnimLayout from '../components/Layouts/LeftAnimLayout'
import RightAnimLayout from '../components/Layouts/RightAnimLayout'
import SneakerGrid from '../components/SneakerGrid/SneakerGrid'

export default function Home() {
  const sneakersPerPage = 4
  const pageAmount = Math.ceil(data.sneakers.length / sneakersPerPage)
  const [currPage, setCurrPage] = useState(1)
  const sneakers = data.sneakers

  const mainSneaker = sneakers[0]
  const sneakersMap = sneakers.slice(currPage * sneakersPerPage - sneakersPerPage + 1, currPage * sneakersPerPage + 1)

  return (
    <AppLayout>
      <div className='flex h-full w-full flex-col lg:flex-row'>
        <LeftAnimLayout>
          <div className='h-full w-full' style={{ backgroundColor: mainSneaker.color }}>
            <Image src={mainSneaker.image_url} style={{ objectFit: 'contain' }} fill alt={mainSneaker.label} quality={100} />
            <Link href={`/${mainSneaker.id}`}>
              <div className='text-c absolute bottom-[20%] right-[10%] text-gray-700'>{mainSneaker.label}</div>
            </Link>
          </div>
        </LeftAnimLayout>

        <RightAnimLayout>
          <SneakerGrid sneakers={sneakersMap} pageAmount={pageAmount} currPage={currPage} setCurrPage={setCurrPage} />
        </RightAnimLayout>
      </div>
    </AppLayout>
  )
}
