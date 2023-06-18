import {call, put, takeEvery} from "redux-saga/effects"
import { successTimestamps, TimeStamp } from "./timeStampsSlice"

function* workGetStamps() {
    const stamps: Response = yield call(()=> {return fetch("http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd")
    .then(res=> {        
        return res.json()
    })})
    
    yield put(successTimestamps(stamps as unknown as TimeStamp[]))
}

function* timeStampsSaga() {
    yield takeEvery("timestamps/getTimestamps", workGetStamps)
}

export default timeStampsSaga