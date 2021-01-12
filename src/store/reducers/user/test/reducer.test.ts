import reducer, { loginUser, logoutUser } from '../reducer'
import { userStateMock } from './mocks'

describe('reducer', () => {
  it('should return an initial state when state is undefined', () => {
    const state = undefined
    const action = { type: 'marklar' } as any
    const result = reducer(state, action)

    expect(result).toMatchObject({})
  })

  it('should return an updated state', () => {
    const state = userStateMock
    const action = {
      type: loginUser.type,
      payload: { username: 'foobar' },
    }
    const result = reducer(state, action)

    expect(result.username).toBe('foobar')
  })

  it('should return an initial state', () => {
    const state = { ...userStateMock }
    const action = {
      type: logoutUser.type,
      payload: { username: 'foobar' },
    }
    const result = reducer(state, action)

    expect(result.username).toBeUndefined()
  })
})
