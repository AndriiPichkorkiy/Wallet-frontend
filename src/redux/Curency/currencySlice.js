import { createSlice } from '@reduxjs/toolkit'
import { string } from 'prop-types';

const initialState = {
    date: null,
    currency: null,
};

export const currencyData = createSlice({
  name: 'currency',
  initialState,
  reducers: {
      setCurrency(state, action) {
          console.log(state, action)
    //    state.currency = action.payload
    },
  }
})

export const { setCurrency } = currencyData.actions