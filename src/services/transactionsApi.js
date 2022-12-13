import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTIwZjUwODM1NGQ0MjI4YWJhZTFkYSIsImlhdCI6MTY3MDUxNjczMCwiZXhwIjoxNjcwNzc1OTMwfQ.rm5CXJZqBA9-Wq1-CzcPW8bsWWNzva8zllPNbi4EhbE'
const BASE_URL = 'https://wallet-project-m5us.onrender.com'

export const transactionsApi = createApi({
  reducerPath: 'transactions',
  tagTypes: ['Transactions'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),

  endpoints: builder => ({
    getAllTransactions: builder.query({
      query: () => ({
        url: '/api/transactions/getAll',
        method: 'GET'
        // params: { limit: 101, page: 1 }
      }),
      providesTags: [{ type: 'Transactions' }]
    }),
    addTransactions: builder.mutation({
      query: initialTransaction => ({
        url: '/api/transactions',
        method: 'POST',
        body: initialTransaction
      }),
      invalidatesTags: [{ type: 'Transactions' }]
    }),
    getCategory: builder.query({
      query: () => ({ url: '/api/transactions/categories', method: 'GET' }),
      invalidatesTags: [{ type: 'Transactions' }]
    })
  })
})

export const {
  useGetAllTransactionsQuery,
  useLazyGetAllTransactionsQuery,
  useAddTransactionsMutation,
  useGetCategoryQuery
} = transactionsApi
