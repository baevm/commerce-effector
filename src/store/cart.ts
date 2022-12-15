import { createEvent, createStore } from 'effector'
import ISneaker from '../types/sneaker'

type SneakerInCart = {
  sneaker: ISneaker
  size: number
}

type CartStore = {
  cart: SneakerInCart[]
  totalPrice: number
}

export const addToCart = createEvent<{ sneaker: ISneaker; size: number }>()
export const removeFromCart = createEvent<{ id: number }>()

const $cartStore = createStore<CartStore>({
  cart: [],
  totalPrice: 0,
})
  .on(addToCart, (state, { sneaker, size }) => ({
    ...state,
    cart: [...state.cart, { sneaker, size }],
    totalPrice: state.totalPrice + sneaker.price,
  }))
  .on(removeFromCart, (state, { id }) => ({
    ...state,
    cart: state.cart.filter(({ sneaker }) => sneaker.id !== id),
    totalPrice: state.totalPrice - state.cart.find(({ sneaker }) => sneaker.id === id)!.sneaker.price,
  }))

export default $cartStore
