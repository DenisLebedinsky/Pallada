import { createSelector } from '@reduxjs/toolkit'
import { AppState } from 'src/store/store.type'

const getUser = (state: AppState) => state.user
const selectUserId = createSelector(getUser, ({ id }) => id)
const selectUserRole = createSelector(getUser, ({ role }) => role)

export { selectUserId, selectUserRole }
