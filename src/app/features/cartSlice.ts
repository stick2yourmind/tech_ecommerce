import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../hooks/types.hooks'

export type CartProduct = Omit<Product, 'category' | 'description' | 'stock'> & {
  quantity: number
}
export interface CartState{
  _id?: string,
  isConfirmed: boolean,
  length: number,
  products: CartProduct[]
}
export interface Action<T>{
  payload: T,
  type: string
}
export type DeleteProduct = Pick<CartProduct, '_id'>
export type CreateCart = Pick<CartProduct, '_id'>
const initialState: CartState = {
  _id: undefined,
  isConfirmed: false,
  length: 0,
  products: []
}
export const cartReducer = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    deleteProduct: (state, action:PayloadAction<DeleteProduct>) => {
      const newProducts = state.products.filter(product => product._id !== action.payload._id)
      state.products = newProducts
      state.length = state.products.length
    },

    setConfirmCheckout: (state, action:PayloadAction<CreateCart>) => {
      state.isConfirmed = true
      state._id = action.payload._id
    },

    updateCreateProduct: (state, action:PayloadAction<CartProduct>) => {
      if (action.payload.quantity === 0) {
        const newProducts = state.products.filter(product => product._id !== action.payload._id)
        state.products = newProducts
      } else {
        const index = state.products.findIndex(product => product._id === action.payload._id)
        if (index === -1) state.products.push(action.payload)
        state.products[index] = { ...action.payload }
      }
      state.length = state.products.length
    }
  }
})

export const { deleteProduct, updateCreateProduct, setConfirmCheckout } = cartReducer.actions
export default cartReducer.reducer
