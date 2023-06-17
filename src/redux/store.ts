import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import timeStampsReducer from "./timeStampsSlice"

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    timestamps: timeStampsReducer
  },
  middleware: [saga]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch