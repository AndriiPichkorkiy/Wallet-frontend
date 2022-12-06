import { createAsyncThunk } from '@reduxjs/toolkit'
import { signup, signin, logout, getCurrent } from '../../api/auth.js'
// import {useSignUpMutation, useLoginMutation, useLogOutMutation } from '../../services/authApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio'

// const [signUp] = useSignUpMutation();
// const [login] = useLoginMutation();
// const [signUp] = useLogOutMutation();
export const signUp = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await signup(data)
      Notify.success('You are sign up!')
      console.log('auth signup', data)
      return result
    } catch (error) {
      Notify.failure(error.message)
      return rejectWithValue(error)
    }
  }
)

export const signIn = createAsyncThunk(
  'auth/signin',
  async (data, { rejectWithValue }) => {
    try {
      const result = await signin(data)
      Notify.success('You are logged in!')
      console.log(result)
      return result
    } catch (error) {
      Notify.failure(error.message)
      return rejectWithValue(error)
    }
  }
)

export const logOut = createAsyncThunk(
  'auth/logout',
  async ({ rejectWithValue }) => {
    try {
      const result = await logout()
      return result
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  try {
    const { auth } = thunkAPI.getState()
    if (!auth.token) return thunkAPI.rejectWithValue()
    const result = await getCurrent(auth.token)
    return { ...result, token: auth.token }
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
