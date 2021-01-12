import { action } from 'typesafe-actions'
import { UserActionsTypes } from 'src/store/reducers/user/types'

// export const loginUserRequest = () => action(UserActionsTypes.LOGIN_REQUEST)
// export const loginUserSuccess = () => action(UserActionsTypes.LOGIN_SUCCESS)

export const logoutUserRequest = () => action(UserActionsTypes.LOGOUT_REQUEST)
export const logoutUserSuccess = () => action(UserActionsTypes.LOGOUT_SUCCESS)
