import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

export const currentToken = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    newToken(_, action) {
      return action.payload
    },
  },
})

export const { newToken } = currentToken.actions
