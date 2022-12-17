import { AnimatePresence, motion } from 'framer-motion'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import ISneaker from '../../types/sneaker'
import ActionIcon from '../Common/ActionIcon'
import PageType from './PageType'
import SneakerItem from './SneakerItem'

type Props = {
  sneakers: ISneaker[]
  currPage: number
  pageAmount: number
  setCurrPage: (page: number) => void
}

const SneakerGrid = ({ sneakers, currPage, pageAmount, setCurrPage }: Props) => {
  const handleBack = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1)
    }
  }

  const handleForward = () => {
    if (currPage < pageAmount) {
      setCurrPage(currPage + 1)
    }
  }

  return (
    <div className='h-full w-full'>
      <div className='grid h-full w-full grid-cols-2 grid-rows-3 gap-0'>
        <AnimatePresence mode='wait'>
          {sneakers.map((sneaker: any, index) => (
            <SneakerItem sneaker={sneaker} key={sneaker.id} index={index} />
          ))}
        </AnimatePresence>

        <div className='col-start-1 col-end-1 row-start-3 row-end-3 flex items-center justify-around text-4xl '>
          <ActionIcon onClick={handleBack}>
            <IoArrowBack size={32} />
          </ActionIcon>
          <div className='mb-2'>
            <sup className='pr-[5px]'>{currPage}</sup>/<sub className='pl-[5px]'>{pageAmount}</sub>
          </div>
          <ActionIcon onClick={handleForward}>
            <IoArrowForward size={32} />
          </ActionIcon>
        </div>

        <PageType />
      </div>
    </div>
  )
}

export default SneakerGrid
