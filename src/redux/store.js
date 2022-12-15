import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { authApi } from '../services/authApi'
import { newsApi } from '../services/newsApi'
import { statsApi } from '../services/statsApi'
import { transactionsApi } from '../services/transactionsApi'

import { currentUser } from './auth/authSlice'
import { currentToken } from './auth/tokenSlice'

import { userBalance } from './finance/financeSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token']
}

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [statsApi.reducerPath]: statsApi.reducer,
  [transactionsApi.reducerPath]: transactionsApi.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
  user: currentUser.reducer,
  token: currentToken.reducer,
  finance: userBalance.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
      .concat(authApi.middleware)
      .concat(statsApi.middleware)
      .concat(transactionsApi.middleware)
      .concat(newsApi.middleware)
})

export const persistor = persistStore(store)
