import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../helpers/axiosBaseQuery'

const BASE_URL = 'https://wallet-project-m5us.onrender.com'

export const transactionsApi = createApi({
  reducerPath: 'transactions',
  tagTypes: ['Transactions'],
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),

  endpoints: builder => ({
    getAllTransactions: builder.query({
      query: () => ({ url: '/transactions', method: 'GET' }),
      invalidatesTags: [{ type: 'Transactions' }]
    })
  })
})

export const { useGetAllTransactionsQuery } = transactionsApi
