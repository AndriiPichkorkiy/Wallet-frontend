import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const nApiKey = "e748f76230c94212b77dc5789416846e"
// const api = `https://newsapi.org/v2/everything?q=economic&apiKey=${nApiKey}`
const BASE_URL = 'https://wallet-project-m5us.onrender.com';

export const newsApi = createApi({
  reducerPath: 'news',
  tagTypes: ['News'],
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
    getNews: builder.query({
      query: () => ({ url: '/api/news', method: 'GET' }),
      invalidatesTags: [{ type: 'News' }]
    }),
  })
})

export const {
  useGetNewsQuery
} = newsApi
