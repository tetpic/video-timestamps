import {call, put, takeEvery} from "redux-saga/effects"

function* workGetStamps() {
    // const stamps = yield call(()=> {fetch("http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd")})
    // const stampsResult = yield stamps.json()
}

function* timeStampsSaga() {
    yield takeEvery("timestamps/getTimestamps", workGetStamps)
}