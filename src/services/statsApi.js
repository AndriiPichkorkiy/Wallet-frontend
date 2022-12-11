import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { axiosBaseQuery } from '../helpers/axiosBaseQuery'

const BASE_URL = 'https://wallet-project-m5us.onrender.com'

export const statsApi = createApi({
  reducerPath: 'stats',
  tagTypes: ['Stats'],
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
    getBalance: builder.query({
      query: () => ({ url: '/api/user/balance', method: 'GET' }),
      invalidatesTags: [{ type: 'Stats' }]
    }),
    getStats: builder.query({
      query: () => ({ url: '/api/transactions/categories', method: 'GET' }),
      invalidatesTags: [{ type: 'Stats' }]
    }),
    getTotalStats: builder.query({
      query: () => ({ url: '/totalStats', method: 'GET' }),
      invalidatesTags: [{ type: 'Stats' }]
    }),
    getStatsByPeriod: builder.query({
      query: params => ({
        url: `/api/transactions/statistics/?${params}`,
        method: 'GET'
      }),

      invalidatesTags: [{ type: 'Stats' }]
    })
  })
})

export const {
  useGetStatsQuery,
  useLazyGetBalanceQuery,
  useGetTotalStatsQuery,
  useGetStatsByPeriodQuery,
  useLazyGetStatsByPeriodQuery
} = statsApi
