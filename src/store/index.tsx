import { configureStore } from '@reduxjs/toolkit'
import imagesReducer from '../features/images/imagesSlice'

export const store = configureStore({
  reducer: {
    images: imagesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store;
