import { combineReducers } from 'redux'
import user from 'src/store/reducers/user/reducer'

const reducers = combineReducers({
  user,
})

export default reducers
