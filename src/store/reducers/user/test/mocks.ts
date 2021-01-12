import { User } from 'src/store/reducers/user/types'

export const userStateMock: User = {
  id: '42',
  username: 'marklar',
  email: 'marklar@foo.bar',
  firstName: 'Eric',
  lastName: 'Cartman',
  isActive: true,
  role: 'admin',
}
