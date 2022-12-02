import { configureStore } from '@reduxjs/toolkit'
import { statsApi } from './stats/statsSlice'

export const store = configureStore({
  reducer: {
    [statsApi.reducerPath]: statsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    statsApi.middleware,
  ],
})
