import { testSaga } from 'redux-saga-test-plan'
import { fork } from 'redux-saga/effects'
import { UserActionsTypes } from 'src/store/reducers/user/types'
import api from 'src/utils/api'
import { logoutUser } from '../reducer'
import userSaga, { logoutUserSaga, watchLogoutUser } from '../saga'

jest.mock('utils/api')

describe('User saga', () => {
  const apiMock = api as jest.Mocked<typeof api>

  it('should yield all watchSagas', () => {
    const saga = testSaga(userSaga)
    const watchSagas = [fork(watchLogoutUser)]

    saga.next().all(watchSagas)
  })

  it("should yield takeLatest and call 'logoutUserSaga'", () => {
    const saga = testSaga(watchLogoutUser)

    saga.next().takeLatest(UserActionsTypes.LOGOUT_REQUEST, logoutUserSaga).next().isDone()
  })

  it("should yield '/auth/logout' request and put", () => {
    apiMock.get.mockReturnValueOnce(Promise.resolve(42))
    const saga = testSaga(logoutUserSaga)

    saga.next().next().put(logoutUser()).next().isDone()

    expect(api.get).toHaveBeenCalledWith('/auth/logout')
  })
})
