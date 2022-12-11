import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    name: '',
    email: ''
  },
  isLoggedIn: false
}

export const currentUser = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isRegister(state, action) {
      state.user = action.payload //при регистрации в стейт записывается объект с данными о пользователе
    },
    isAuth(state, _) {
      state.isLoggedIn = true //при авторизации в стейт записывается true, что значит что пользователь залогинен
    },
    newCurrentUser(state, action) {
      state.user = action.payload //при обновлении данных пользователя в стейт записывается объект с данными о пользователе (в случае если пользователь не новый, просто заходит в свой профиль)
    },
    onLogOutAction(state, acton) {
      state.user = {
        name: '',
        email: ''
      }
      state.isLoggedIn = false //при выходе из аккаунта в стейт обнуляем объект пользователя в стейте
    }
  }
})

export const { isRegister, isAuth, newCurrentUser, onLogOutAction } =
  currentUser.actions
