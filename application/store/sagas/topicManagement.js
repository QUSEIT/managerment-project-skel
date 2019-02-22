import {
  getTopicList,
  getTopicTypeList,
  getTopicDatail,
  getUserList,
  publishTopic,
  editTopicDetail
} from "../../api/topicManagement"
import { getUpToken } from "../../api/upTokenApi"
import { ERR_OK } from "../../api/config"
import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects'
import Router from "next/router"

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

function* getTopicDetailFn(payload) {
  const response = yield getTopicDatail(payload.topicId)
  if (response.errno === ERR_OK) {
    yield put({ type: 'TOPIC_DETAIL', topicDetail: response.data })
    payload.callBack(response.data)
  }
}

function* getTopicPublicUserFn(payload) {
  const response = yield getUserList(payload.data)
  if (response.errno === ERR_OK) {
    yield put({ type: 'TOPIC_PUBLIC_USER', topicUser: response })
  }
}

function* getUpTokenFn() {
  const response = yield getUpToken()
  if (response.errno === ERR_OK) {
    yield put({ type: 'SET_UP_TOKEN', uploadToke: response.uptoken })
  }
}

function* onPublishTopicFn(payload) {
  const response = yield publishTopic(payload.data)
  if (response.errno === ERR_OK) {
    Router.push('/management/topicManagement')
  } else {
    alert('发布失败!')
  }
}

function* onEditTopicDetailFn(payload) {
  const response = yield editTopicDetail(payload.data)
  if (response.errno === ERR_OK) {
    Router.push('/management/topicManagement')
  } else {
    alert('修改失败!')
  }
}

export default function* commonSagas() {
  yield all([
    yield takeEvery('GET_TOPIC_LIST', getTopicListFn),
    yield takeEvery('GET_TOPIC_TYPE_LIST', getTopicTypeListFn),
    yield takeEvery('GET_TOPIC_DETAIL', getTopicDetailFn),
    yield takeEvery('GET_TOPIC_PUBLIC_USER', getTopicPublicUserFn),
    yield takeEvery('GET_UP_TOKEN', getUpTokenFn),
    yield takeEvery('SET_PUBLISH_TOPIC', onPublishTopicFn),
    yield takeEvery('EDIT_TOPIC_DETAIL', onEditTopicDetailFn),
  ])
}