import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import timeStampsSaga from './timeStampSaga'
import timeStampsReducer from "./timeStampsSlice"

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    timestamps: timeStampsReducer
  },
  middleware: [saga]
})

saga.run(timeStampsSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch