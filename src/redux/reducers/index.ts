import { combineReducers } from 'redux'

import starwars from './starwars'

const createRootReducer = () =>
  combineReducers({
    starwars,
  })

export default createRootReducer