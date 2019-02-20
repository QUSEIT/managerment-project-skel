import { combineReducers } from 'redux'
// Put all your reducers here.
import common from './common'
import topicManagement from './topicManagement'
import associationLabel from './associationLabel'

export default combineReducers({
  common,
  topicManagement,
  associationLabel
})
