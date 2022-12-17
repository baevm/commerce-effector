import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { MouseEventHandler, useState } from 'react'

const menuItems: Array<'New' | 'Popular'> = ['New', 'Popular']

const MenuItem = ({
  text,
  selected,
  onClick,
}: {
  text: string
  selected: boolean
  onClick: MouseEventHandler<HTMLDivElement>
}) => (
  <motion.div className='menu-item' onClick={onClick} animate={{ opacity: selected ? 1 : 0.5 }}>
    <div className='cursor-pointer text-xl'>{text}</div>
    {selected && <motion.div className='border-b-2 border-gray-700' layoutId='underline' />}
  </motion.div>
)

const PageType = () => {
  const [pageType, setPageType] = useState<'New' | 'Popular'>('New')

  return (
    <div className='col-start-2 col-end-2 row-start-3 row-end-3 flex items-center justify-center gap-4 bg-[#F3F3F5]'>
      <AnimateSharedLayout>
        {menuItems.map((item) => (
          <MenuItem key={item} text={item} selected={pageType === item} onClick={() => setPageType(item)} />
        ))}
      </AnimateSharedLayout>
    </div>
  )
}

export default PageType
