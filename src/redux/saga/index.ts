import { all } from 'redux-saga/effects'
import charactersWatcher from './starwars'

export default function* rootSaga() {
    yield all([...charactersWatcher ])
}