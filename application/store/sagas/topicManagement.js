import { getTopicList, getTopicTypeList, getUserList } from "../../api/topicManagement"
import { ERR_OK } from "../../api/config"
import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects'

function* getTopicListFn(payload) {
  const response = yield getTopicList(payload.data)
  if (response.errno === ERR_OK) {
    yield put({ type: 'TOPIC_LIST', topicList: response.data })
  }
}

function* getTopicTypeListFn() {
  const response = yield getTopicTypeList()
  if (response.errno === ERR_OK) {
    yield put({ type: 'TOPIC_TYPE_LIST', topicTypeList: response.data })
  }
}

function* getTopicPublicUserFn(payload) {
  const response = yield getUserList(payload.data)
  if (response.errno === ERR_OK) {
    yield put({ type: 'TOPIC_PUBLIC_USER', topicUser: response })
  }
}

export default function* commonSagas() {
  yield all([
    yield takeEvery('GET_TOPIC_LIST', getTopicListFn),
    yield takeEvery('GET_TOPIC_TYPE_LIST', getTopicTypeListFn),
    yield takeEvery('GET_TOPIC_PUBLIC_USER', getTopicPublicUserFn)
  ])
}