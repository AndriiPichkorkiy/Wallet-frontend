import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../helpers/axiosBaseQuery'

const BASE_URL = 'http://localhost:4000'

export const statsApi = createApi({
  reducerPath: 'stats',
  tagTypes: ['Stats'],
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getStats: builder.query({
      query: () => ({ url: '/stats', method: 'GET' }),
      invalidatesTags: [{ type: 'Stats' }]
    }),
    getTotalStats: builder.query({
      query: () => ({ url: '/totalStats', method: 'GET' }),
      invalidatesTags: [{ type: 'Stats' }]
    }),
    getStatsByPeriod: builder.query({
      query: params => ({
        url: `/totalStats/${params}`,
        method: 'GET'
      }),

      invalidatesTags: [{ type: 'Stats' }]
    })
  })
})

export const {
  useGetStatsQuery,
  useGetTotalStatsQuery,
  useGetStatsByPeriodQuery
} = statsApi
