import { Store } from 'redux'
import { Task } from 'redux-saga'
import reducers from 'src/store/reducers'

export interface ReduxSagaStore extends Store {
  sagaTask?: Task
}

export type AppState = ReturnType<typeof reducers>
