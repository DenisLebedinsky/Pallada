import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginData, User, UserStore } from './types'

const initialState: UserStore = {
  userLoading: false,
  user: null,
}

const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {
    loginUserRequest(state, action: PayloadAction<LoginData>) {
      state.userLoading = true

      return state
    },
    loginUser(state, action: PayloadAction<User>) {
      state.user = action.payload

      return state
    },
    logoutUser(state) {
      state = initialState

      return state
    },
  },
})

const { loginUser, logoutUser } = userSlice.actions

export { logoutUser, loginUser }

export default userSlice.reducer
