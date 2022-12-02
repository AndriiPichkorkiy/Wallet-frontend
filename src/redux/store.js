import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { statsApi } from './stats/statsSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const appReducer = combineReducers({
  [statsApi.reducerPath]: statsApi.reducer,
})

const persistedReducer = persistReducer(authPersistConfig, appReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(statsApi.middleware),
})

export const persistor = persistStore(store)
