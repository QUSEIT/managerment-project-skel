import { all } from 'redux-saga/effects'
import user from './user'
import topicManagement from './topicManagement'
import associationLabel from './associationLabel'
import userManagement from './userManagement'
import attentionConfiguration from './attentionConfiguration'
import createRobot from './createRobot'
import setting from './setting'
import backstageUserManagement from './backstageUserManagement'
import robotManagement from './robotManagement'
import moreOperating from './moreOperating'

export default function* rootSaga() {
  yield all([
    ...user(),
    ...topicManagement(),
    ...associationLabel(),
    ...userManagement(),
    ...attentionConfiguration(),
    ...createRobot(),
    ...setting(),
    ...backstageUserManagement(),
    ...robotManagement(),
    ...moreOperating()
  ])
}
