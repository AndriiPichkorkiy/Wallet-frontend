import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const currentUser = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isAuth(_, action) {
      return action.payload
    },
  },
})

export const { isAuth } = currentUser.actions
