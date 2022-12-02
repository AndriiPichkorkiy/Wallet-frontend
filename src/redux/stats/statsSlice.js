import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://localhost:3000'

export const statsApi = createApi({
  reducerPath: 'stats',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Stats'],
  endpoints: builder => ({
    getStats: builder.query({
      query: () => `/stats`,
      providesTags: ['Stats'],
    }),
    getTotalStats: builder.query({
      query: () => `/totalStats`,
      providesTags: ['Stats'],
    }),
  }),
})

export const { useGetStatsQuery, useGetTotalStatsQuery } = statsApi
