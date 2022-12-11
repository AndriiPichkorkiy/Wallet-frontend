import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://wallet-project-m5us.onrender.com'

export const transactionsApi = createApi({
  reducerPath: 'transactions',
  tagTypes: ['Transactions'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,

    prepareHeaders: (headers, { getState }) => {
      const token = getState().token
      console.log('token', token)
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: builder => ({
    getAllTransactions: builder.query({
      query: () => ({ url: '/api/transactions/getAll', method: 'GET' }),
      invalidatesTags: [{ type: 'Transactions' }]
    })
  })
})

export const { useGetAllTransactionsQuery } = transactionsApi
