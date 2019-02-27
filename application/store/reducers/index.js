import { combineReducers } from 'redux'
// Put all your reducers here.
import common from './common'
import topicManagement from './topicManagement'
import associationLabel from './associationLabel'
import userManagement from './userManagement'
import attentionConfiguration from './attentionConfiguration'
import createRobot from './createRobot'
import backstageUserManagement from './backstageUserManagement'

export default combineReducers({
  common,
  topicManagement,
  associationLabel,
  userManagement,
  attentionConfiguration,
  createRobot,
  backstageUserManagement
})
