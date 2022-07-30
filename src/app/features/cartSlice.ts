import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../hooks/types.hooks'

export type CartProduct = Omit<Product, 'category' | 'description' | 'stock'> & {
  quantity: number
}
export type Cart = Map<string, CartProduct>
export interface CartState{
  cart: Cart
}
export interface Action<T>{
  payload: T,
  type: string
}
const initialState: CartState = {
  cart: new Map()
}
export const cartReducer = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    deleteProduct: (state, action:Action<CartProduct>) => {
      state.cart.delete(action.payload._id)
    },
    loadCart: (state) => {
      const cartData = localStorage.getItem('cart')
      if (cartData)
        state.cart = new Map(JSON.parse(cartData))
    },

    updateCreateProduct: (state, action:Action<CartProduct>) => {
      if (action.payload.quantity === 0)
        state.cart.delete(action.payload._id)
      else {
        state.cart.set(action.payload._id, action.payload)
        localStorage.setItem('cart', JSON.stringify([...state.cart]))
      }
    }
  }
})

export const { deleteProduct, updateCreateProduct, loadCart } = cartReducer.actions
export default cartReducer.reducer
