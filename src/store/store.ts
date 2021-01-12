import { createRouterMiddleware, initialRouterState } from 'connected-next-router'
import router from 'next/router'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './saga'
import { AppState, ReduxSagaStore } from './store.type'

const routerMiddleware = createRouterMiddleware()
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

function configureStore(initialState: AppState): ReduxSagaStore {
  const sagaMiddleware = createSagaMiddleware()

  if (router.router?.asPath) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    initialState.router = initialRouterState(router.router?.asPath)
  }

  const store: ReduxSagaStore = createStore(
    rootReducer,

    bindMiddleware([sagaMiddleware, routerMiddleware])
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
