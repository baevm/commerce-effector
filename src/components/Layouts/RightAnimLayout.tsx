import { motion } from 'framer-motion'
import React from 'react'

const RightAnimLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{ type: 'spring', stiffness: 150, damping: 30 }}
      className='z-50 h-full w-full lg:w-1/2'>
      {children}
    </motion.div>
  )
}

export default RightAnimLayout
