import { TimeStamp } from "../redux/timeStampsSlice"

export function findTimeStamps(currentTime: number, timeStamps: TimeStamp[] ):TimeStamp[]  {        
    let currentTimeInMilliseconds = Number(currentTime.toFixed(3)) * 1000
    let result = []
    result = timeStamps.filter(el=> (currentTimeInMilliseconds >= el.timestamp && currentTimeInMilliseconds  <= (el.timestamp + el.duration) ))
    return result
}