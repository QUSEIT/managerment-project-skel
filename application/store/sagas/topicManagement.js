import { getTopicList } from "../../api/topicManagement"
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

export default function* commonSagas() {
  yield all([
    yield takeEvery('GET_TOPIC_LIST', getTopicListFn),
  ])
}