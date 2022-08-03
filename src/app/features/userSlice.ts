import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserData{
  _id: string
  accessToken: string
  address: string
  email: string
  name: string
  phone: number
  role: number
}
export interface UserState{
  data: UserData | undefined
}
const initialState: UserState = {
  data: undefined
}
export const userReducer = createSlice({
  initialState,
  name: 'user',
  reducers: {
    cleanUser: (state) => {
      state.data = undefined
    },

    setUser: (state, action:PayloadAction<UserData>) => {
      state.data = { ...action.payload }
    }
  }
})

export const { setUser, cleanUser } = userReducer.actions
export default userReducer.reducer
