import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const currencysApi = createApi({
    reducerPath: 'currency',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.monobank.ua/bank/currency' }),
    endpoints: (builder) => ({
        getCurrency: builder.query({
            query: () => '',
        })
    })
})


export const { useGetCurrencyQuery } = currencysApi;



