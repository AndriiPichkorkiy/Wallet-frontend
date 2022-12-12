import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currency: null,
    date: null,
};

export const currencyData = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrency(state, action) {
           return (state = action.payload)
        },
        setDate(state, action) {
            return state = action.payload
        }
    },
})

export const { setCurrency, setDate } = currencyData.actions

