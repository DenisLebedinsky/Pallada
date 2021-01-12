import { logoutUserRequest, logoutUserSuccess } from 'src/store/reducers/user/actions'
import { userStateMock } from 'src/store/reducers/user/test/mocks'
import { UserActionsTypes } from 'src/store/reducers/user/types'
import { loginUser } from '../reducer'

describe('actions', () => {
  it('should return a correct action', () => {
    const action = { type: loginUser.type, payload: userStateMock }
    const result = loginUser(userStateMock)

    expect(result).toMatchObject(action)
  })

  it('should return a correct action', () => {
    const action = { type: UserActionsTypes.LOGOUT_REQUEST }
    const result = logoutUserRequest()

    expect(result).toMatchObject(action)
  })

  it('should return a correct action', () => {
    const action = { type: UserActionsTypes.LOGOUT_SUCCESS }
    const result = logoutUserSuccess()

    expect(result).toMatchObject(action)
  })
})
