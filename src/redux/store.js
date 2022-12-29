import { configureStore } from '@reduxjs/toolkit'
import todolist from './reducer'
export const Store = configureStore({
  reducer: {
    list:todolist,
},
})