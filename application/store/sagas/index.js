import { all } from 'redux-saga/effects'
import user from './user'
import topicManagement from './topicManagement'
import associationLabel from './associationLabel'
import userManagement from './userManagement'

export default function* rootSaga() {
  yield all([
    ...user(),
    ...topicManagement(),
    ...associationLabel(),
    ...userManagement()
  ])
}
