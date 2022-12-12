import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const currencyApi = createApi({
    reducerPath: "currency",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.monobank.ua/bank/currency",
    }),
    tagTypes: ["Currency"],
    endpoints: builder => ({
        getCurrency: builder.query({
            query: () => '',
            providesTags: ["Currency"],
        }),
    }),
});



export const { useLazyGetCurrencyQuery } = currencyApi;