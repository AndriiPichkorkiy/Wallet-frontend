import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { axiosBaseQuery } from '../helpers/axiosBaseQuery'

const BACKEND_URL = 'https://wallet-project-m5us.onrender.com'

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: builder => ({
    signUp: builder.mutation({
      query: userData => ({
        url: `/api/user/register`,
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: [{ type: 'Auth' }],
    }),
    login: builder.mutation({
      query: userData => ({
        url: `/users/login`,
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: [{ type: 'Auth' }],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
})

export const { useSignUpMutation, useLoginMutation, useLogOutMutation } =
  authApi
