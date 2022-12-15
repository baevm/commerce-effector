import { motion } from 'framer-motion'
import React from 'react'
import Leftbar from '../Leftbar/Leftbar'
import Rightbar from '../Rightbar'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen w-screen overflow-hidden font-PSR'>
      <Leftbar />
      <div className='h-full w-full'>{children}</div>
      <Rightbar />
    </div>
  )
}

export default AppLayout
