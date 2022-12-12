import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const currencyApi = createApi({
    reducerPath: 'currency',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.monobank.ua/bank/currency' }),
    refetchOnMountOrArgChange: 300,
    endpoints: (builder) => ({
        getCurrency: builder.query({
            query: () => '/',
        })
    })
})


export const { useGetCurrencyQuery } = currencyApi;



