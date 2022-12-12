import { createSlice } from '@reduxjs/toolkit'
import { string } from 'prop-types';

const initialState = {
    currency: null,
    date: null,
};

export const currencyData = createSlice({
    name: 'currency',
    
        setCurrency(state, action) {
            state.currency = action.payload.currency
        },
        setDate(state, action) {
            state.date = action.payload
        }
})

export const { setCurrency, setDate } = currencyData.actions

