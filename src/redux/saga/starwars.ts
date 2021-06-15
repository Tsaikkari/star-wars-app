import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { getStarshipsSuccess, getStarshipsFail } from '../actions/starwars'

function* getStarshipsSaga() {
  try {
    //@ts-ignore
    const res = yield axios.get('https://swapi.dev/api/starships/')
    //@ts-ignore
    yield put(getStarshipsSuccess(res.data.results))
  } catch (error) {
    yield put(getStarshipsFail(error))
  }
}

const sagaWatcher = [
  takeLatest('GET_STARSHIPS_REQUEST', getStarshipsSaga),
]

export default sagaWatcher
