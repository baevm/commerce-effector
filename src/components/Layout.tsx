import React from 'react'
import Leftbar from './Leftbar'
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
