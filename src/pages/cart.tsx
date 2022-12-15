import { useStore } from 'effector-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import AppLayout from '../components/Layouts/AppLayout'
import $cartStore, { addToCart, removeFromCart } from '../store/cart'

const CartPage = () => {
  const { cart, totalPrice } = useStore($cartStore)

  const handleRemove = (id: number) => {
    removeFromCart({ id })
  }

  return (
    <AppLayout>
      <div className='flex h-full w-full flex-col items-center justify-center  bg-[#F3F3F5]'>
        {cart.length > 0 ? (
          cart.map((sneaker) => (
            <div key={sneaker.id} className='flex gap-4 rounded-sm bg-white p-6'>
              <Image src={sneaker.image_url} alt={sneaker.label} />
              <div>{sneaker.label}</div>
              <button onClick={() => handleRemove(sneaker.id)}>
                <IoCloseSharp size={24} />
              </button>
            </div>
          ))
        ) : (
          <>
            <h1 className='mb-4 text-2xl font-semibold'>Cart is empty</h1>
            <Link href='/' className='underline'>
              Add more items in cart
            </Link>
          </>
        )}
        {totalPrice > 0 && <div>Total price: {totalPrice}</div>}
      </div>
    </AppLayout>
  )
}

export default CartPage
