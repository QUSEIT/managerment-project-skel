import { combineReducers } from 'redux'
// Put all your reducers here.
import common from './common'
import topicManagement from './topicManagement'
import associationLabel from './associationLabel'
import userManagement from './userManagement'

export default combineReducers({
  common,
  topicManagement,
  associationLabel,
  userManagement
})
