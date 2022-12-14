import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='rotate-[30deg]'>
      <Image src='/sneaker.png' width='52' height='52' alt='logo' />
    </div>
  )
}

export default Logo
