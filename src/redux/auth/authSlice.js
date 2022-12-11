import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    name: '',
    email: ''
  },
  isLoggedIn: false,
  newUser: false
}

export const currentUser = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isRegister(state, action) {
      state.user = action.payload //при регистрации в стейт записывается объект с данными о пользователе
      state.newUser = true //при регистрации в стейт записывается true, что значит что пользователь новый
    },
    isAuth(state, _) {
      state.isLoggedIn = true //при авторизации в стейт записывается true, что значит что пользователь залогинен
      state.newUser = 'EXIT'
    },
    newCurrentUser(state, action) {
      state.user = action.payload //при обновлении данных пользователя в стейт записывается объект с данными о пользователе (в случае если пользователь не новый, просто заходит в свой профиль)
    },
    onLogOutAction(state, acton) {
      state.user = {
        name: '',
        email: ''
      }
      state.newUser = false
      state.isLoggedIn = false //при выходе из аккаунта в стейт обнуляем объект пользователя в стейте
    }
  }
})

export const { isRegister, isAuth, newCurrentUser, onLogOutAction } =
  currentUser.actions
