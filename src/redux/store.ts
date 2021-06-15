import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { AppState } from '../redux/types'
import createRootReducer from '../redux/reducers'

export const initState: AppState = {
  starwars: {
    list: [],
    starshipsList: []
   },
}

export default function makeStore(initialState = initState) {
  const middleware = thunk
  let composeEnhancers = compose

  const localState = localStorage.getItem('initState')
  localState && (initialState = JSON.parse(localState))

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(middleware))
  )

  if ((module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}