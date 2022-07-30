import { createSlice } from '@reduxjs/toolkit'

export interface UpdateCreateProduct{
  name: string,
  photo: string,
  price: number,
  productId: string,
  quantity: number
}
export interface DeleteProduct{
  productId: string
}
export interface CartState{
  cart: Map<string, UpdateCreateProduct>
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
    deleteProduct: (state, action:Action<DeleteProduct>) => {
      state.cart.delete(action.payload.productId)
    },
    loadCart: (state) => {
      const cartData = localStorage.getItem('cart')
      if (cartData)
        state.cart = new Map(JSON.parse(cartData))
    },

    updateCreateProduct: (state, action:Action<UpdateCreateProduct>) => {
      if (action.payload.quantity === 0)
        state.cart.delete(action.payload.productId)
      else {
        state.cart.set(action.payload.productId, {
          name: action.payload.name,
          photo: action.payload.photo,
          price: action.payload.price,
          productId: action.payload.productId,
          quantity: action.payload.quantity
        })
        localStorage.setItem('cart', JSON.stringify([...state.cart]))
      }
    }
  }
})

export const { deleteProduct, updateCreateProduct } = cartReducer.actions
export default cartReducer.reducer
