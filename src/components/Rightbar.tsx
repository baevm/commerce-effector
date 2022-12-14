import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import { FiPercent } from 'react-icons/fi'
import ActionIcon from './ActionIcon'
import { useRouter } from 'next/router'
import { useStore } from 'effector-react'
import $cartStore from '../store/cart'

function calcItemsInCart(length: number) {
  switch (length) {
    case 0:
      return 'Cart is empty'
    case 1:
      return '1 item in cart'
    default:
      return length + ' items in cart'
  }
}

const Rightbar = () => {
  const router = useRouter()
  const { cart, totalPrice } = useStore($cartStore)
  return (
    <div className='flex flex-col items-center justify-between px-8 py-6'>
      <div className='octagon bg-[#92B6CC] p-[9px]'>
        <FiPercent size={28} color='white' />
      </div>
      <ActionIcon onClick={() => router.push('/cart')}>
        <IoBagHandleOutline size={32} />
      </ActionIcon>
      <div className='h-[176px] text-end' style={{ writingMode: 'vertical-lr' }}>
        {calcItemsInCart(cart.length)}
      </div>
    </div>
  )
}

export default Rightbar
