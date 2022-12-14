import { createEvent, createStore } from 'effector'
import ISneaker from '../types/sneaker'

type CartStore = {
  cart: ISneaker[]
  totalPrice: number
}

export const addToCart = createEvent<ISneaker>()
export const removeFromCart = createEvent<{ id: number }>()

const $cartStore = createStore<CartStore>({
  cart: [],
  totalPrice: 0,
})
  .on(addToCart, (state, sneaker) => ({
    ...state,
    cart: [...state.cart, sneaker],
    totalPrice: state.totalPrice + sneaker.price,
  }))
  .on(removeFromCart, (state, { id }) => ({
    ...state,
    cart: state.cart.filter((sneaker) => sneaker.id !== id),
    totalPrice: state.totalPrice - state.cart.find((sneaker) => sneaker.id === id)!.price,
  }))

export default $cartStore
