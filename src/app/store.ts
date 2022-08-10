import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import userReducer from './features/userSlice'
import adminChatReducer from './features/adminChatSlice'

export const store = configureStore({
  reducer: {
    adminChat: adminChatReducer,
    cart: cartReducer,
    user: userReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
