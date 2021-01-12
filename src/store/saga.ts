import { all, fork } from 'redux-saga/effects'
import userSaga from 'src/store/reducers/user/saga'

function* rootSaga() {
  yield all([fork(userSaga)])
}

export default rootSaga
