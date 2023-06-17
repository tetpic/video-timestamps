import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TimeStamp = {
    id: number,
    timestamp: number,
    duration: number,
    zone: {
        left: number,
        top: number,
        width: number,
        height: number
    }
}

export interface TimeStampState {
    timeStamps: TimeStamp[],
    isLoading: boolean,
    errors: string[]
}

const initialState: TimeStampState = {
  timeStamps: [],
  isLoading: false,
  errors: []
}

export const timeStampSlice = createSlice({
  name: 'timestamps',
  initialState,
  reducers: {
    getTimestamps: (state) => {
        state.isLoading = true

    },
    failureTimestamps: (state, action: PayloadAction<number>) => {
      state.isLoading = false
    },
    successTimestamps: (state, action)=> {
        state.timeStamps = action.payload
        state.isLoading = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { getTimestamps, failureTimestamps, successTimestamps } = timeStampSlice.actions

export default timeStampSlice.reducer