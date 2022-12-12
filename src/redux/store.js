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
import { statsApi } from '../services/statsApi'
import { transactionsApi } from '../services/transactionsApi'
import { currencyApi } from '../services/currencyApi'

import { currentUser } from './auth/authSlice'
import { currentToken } from './auth/tokenSlice'
import { userBalance } from './finance/financeSlice'
import { currencyData } from './Curency/currencySlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'currency']
}

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [statsApi.reducerPath]: statsApi.reducer,
  [transactionsApi.reducerPath]: transactionsApi.reducer,
  user: currentUser.reducer,
  token: currentToken.reducer,
  finance: userBalance.reducer,
  currency: currencyData.reducer,
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
     .concat(currencyApi.middleware)
})

export const persistor = persistStore(store)
