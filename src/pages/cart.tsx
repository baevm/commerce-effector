import { useStore } from 'effector-react'
import Image from 'next/image'
import { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import ActionIcon from '../components/Common/ActionIcon'
import Button from '../components/Common/Button'
import Divider from '../components/Common/Divider'
import AppLayout from '../components/Layouts/AppLayout'
import LeftAnimLayout from '../components/Layouts/LeftAnimLayout'
import RightAnimLayout from '../components/Layouts/RightAnimLayout'
import $cartStore, { removeFromCart } from '../store/cart'

const DELIVERIES = [
  { label: 'Standard', price: 0, id: 'standard' },
  { label: 'Express', price: 10, id: 'express' },
  { label: 'Next Day', price: 20, id: 'next-day' },
]

const CartPage = () => {
  const [delivery, setDelivery] = useState('standard')
  const { cart, totalPrice } = useStore($cartStore)

  const handleRemove = (id: number) => {
    removeFromCart({ id })
  }

  return (
    <AppLayout>
      <div className='flex h-full w-full'>
        <LeftAnimLayout>
          <div className='h-full w-full border-x-[1px]  border-gray-200 bg-white px-12 py-20'>
            <div className='flex justify-between'>
              <h1 className='text-2xl font-semibold'>Shopping Cart</h1>
              <h1 className='text-2xl font-semibold'>{cart.length} items</h1>
            </div>
            <Divider />

            <div className='flex justify-between text-gray-400'>
              <div className='w-1/2'>Product details</div>
              <div className='w-1/3 text-center'>Size</div>
              <div className='w-1/3 text-end'>Price</div>
              <div className='w-1/6' />
            </div>
            {cart.map(({ sneaker, size }, index) => (
              <>
                <div key={sneaker.id} className='flex w-full items-center justify-between'>
                  <div className='flex w-1/2 items-center'>
                    <Image src={sneaker.image_url} width='128' height='64' alt={sneaker.label} />
                    <div>{sneaker.label}</div>
                  </div>
                  <div className='w-1/3 text-center'>{size}</div>
                  <div className='w-1/3 text-end'>${sneaker.price}</div>
                  <div className='mt-[4px] flex w-1/6 justify-end'>
                    <ActionIcon onClick={() => handleRemove(sneaker.id)}>
                      <IoCloseSharp />
                    </ActionIcon>
                  </div>
                </div>
                {index !== cart.length - 1 && <Divider />}
              </>
            ))}
          </div>
        </LeftAnimLayout>

        <RightAnimLayout>
          <div className='h-full w-full bg-[#F3F3F5] px-12 py-20'>
            <h1 className='text-2xl font-semibold'>Order Summary</h1>
            <Divider />

            <div className='flex justify-between'>
              <div className='uppercase'>items {cart.length}</div>
              <div>${totalPrice}</div>
            </div>

            <div className='mt-8 flex flex-col'>
              <label className='uppercase' htmlFor='select_delivery'>
                shipping
              </label>
              <select
                onChange={(e) => setDelivery(e.target.value)}
                defaultValue={DELIVERIES[0].id}
                id='select_delivery'
                className='mt-2 border-none p-4 font-mono shadow-sm focus:outline-0'>
                {DELIVERIES.map(({ label, price, id }) => (
                  <option key={id} value={id}>
                    {label} - ${price}
                  </option>
                ))}
              </select>
            </div>

            <div className='mt-8 flex flex-col'>
              <label className='uppercase' htmlFor='promo_code_input'>
                promo code
              </label>
              <input
                placeholder='Enter your code'
                type='text'
                id='promo_code_input'
                className='mt-2 border-none p-4 font-mono shadow-sm focus:outline-0'
              />
              <Button className='mt-4 self-start'>Apply</Button>
            </div>

            <Divider my={'my-8'} />

            <div className='flex flex-col justify-between'>
              <div className='flex justify-between'>
                <div className='uppercase'>total cost</div>
                <div>${totalPrice + DELIVERIES.find((del) => del.id === delivery)!.price}</div>
              </div>
              <Button className='mt-4'>Checkout</Button>
            </div>

          </div>
        </RightAnimLayout>
      </div>
    </AppLayout>
  )
}

export default CartPage
