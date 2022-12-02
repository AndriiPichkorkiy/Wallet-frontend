import { createApi } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export const statsApi = createApi({
  reducerPath: 'stats',
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Stats'],
  endpoints: builder => ({
    getStats: builder.query({
      query: () => ({ url: '/stats', method: 'GET' }),
      providesTags: ['Stats'],
    }),
    getTotalStats: builder.query({
      query: () => ({ url: '/totalStats', method: 'GET' }),
      providesTags: ['Stats'],
    }),
  }),
})

export const { useGetStatsQuery, useGetTotalStatsQuery } = statsApi
