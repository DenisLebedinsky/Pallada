import { selectUserId, selectUserRole } from '../selectors'
import { userStateMock } from './mocks'

describe('selectors', () => {
  it('should return userId from store', () => {
    const result = selectUserId({ user: userStateMock } as any)

    expect(result).toBe(userStateMock.id)
  })

  it('should return userId from store', () => {
    const result = selectUserRole({ user: userStateMock } as any)

    expect(result).toBe(userStateMock.role)
  })
})
