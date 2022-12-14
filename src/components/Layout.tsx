import { motion } from 'framer-motion'
import React from 'react'
import Leftbar from './Leftbar/Leftbar'
import Rightbar from './Rightbar'



const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen w-screen font-PSR'>
      <Leftbar />
      {children}
      <Rightbar />
    </div>
  )
}

export default Layout
