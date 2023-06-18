import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type TimeStamp = {
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
    currentVideoTime: number
    isLoaded: boolean,
    errors: string[]
}

const initialState: TimeStampState = {
  timeStamps: [],
  currentVideoTime: 0,
  isLoaded: false,
  errors: []
}

export const timeStampSlice = createSlice({
  name: 'timestamps',
  initialState,
  reducers: {
    getTimestamps: (state) => {
        state.isLoaded = false

    },
    failureTimestamps: (state, action: PayloadAction<string>) => {
      state.isLoaded = false
      state.errors = ['ошибка', action.payload]
    },
    successTimestamps: (state, action: PayloadAction<TimeStamp[]>)=> {   
      let sorted = action.payload.sort((a, b)=> a.timestamp - b.timestamp)     
      state.timeStamps = sorted
      state.isLoaded = true
    },
    setCurrentTime: (state, action) => {
      state.currentVideoTime = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { getTimestamps, failureTimestamps, successTimestamps, setCurrentTime } = timeStampSlice.actions

export default timeStampSlice.reducer