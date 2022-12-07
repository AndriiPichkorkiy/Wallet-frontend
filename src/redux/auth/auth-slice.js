import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, logOut, current } from './auth-operations';

const initialState = {
    user: {},
    isLogin:false,
    token: '',
    loading:false,
    error:null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        // signup
        [signUp.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [signUp.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.isLogin = true;
            store.token = payload.token;
        },
        [signUp.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        // signin
         [signIn.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [signIn.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.isLogin = true;
            store.token = payload.token;
        },
        [signIn.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        // logout
        [logOut.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [logOut.fulfilled]: (store) => {
            store.loading = false;
            store.user = {};
            store.isLogin = false;
            store.token = '';
        },
        [logOut.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        // current
        [current.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [current.fulfilled]: (store,action) => {
            store.loading = false;
            store.user = {name:action.payload.name, email:action.payload.email};
            store.isLogin = true;
            store.token = action.payload.token;
        },
        [current.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },

    }
})

export default authSlice.reducer;