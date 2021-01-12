import { all, fork, put, takeLatest } from 'redux-saga/effects'
import { UserActionsTypes } from 'src/store/reducers/user/types'
import api from 'src/utils/api'
import { logoutUser } from './reducer'

function* logoutUserSaga() {
  try {
    yield api.get('/auth/logout')

    yield put(logoutUser())
  } catch (e) {}
}

function* watchLogoutUser() {
  yield takeLatest(UserActionsTypes.LOGOUT_REQUEST, logoutUserSaga)
}

function* userSaga() {
  yield all([fork(watchLogoutUser)])
}

export { watchLogoutUser, logoutUserSaga }

export default userSaga
