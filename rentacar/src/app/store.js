import { configureStore } from '@reduxjs/toolkit'
import carlistReducer from '../features/carlist/carlistSlice'

export const store = configureStore({
  reducer: {
    carlist: carlistReducer,
  },
})