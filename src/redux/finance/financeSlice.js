import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

export const userBalance = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    setBalance(state, action) {
      return (state = action.payload)
    }
  }
})

export const { setBalance } = userBalance.actions
