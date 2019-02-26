import { getAttentionConfigurationUser, AddDelAttentionConfigurationUser } from "../../api/attentionConfiguration"
import { ERR_OK } from "../../api/config"
import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects'

function* getAttentionConfigurationUserFn(payload) {
  const response = yield getAttentionConfigurationUser()
  if (response.errno === ERR_OK) {
    yield put({ type: 'ATTENTION_CONFIGURATION_USER', attentionConfigurationUser: response.data })
  }
}

function* AddDelAttentionConfigurationUserFn(payload) {
  const response = yield AddDelAttentionConfigurationUser(payload.data)
  if (response.errno === ERR_OK) {
    if (payload.data.code) {
      alert('移除成功')
    } else {
      alert('添加成功')
    }
    yield getAttentionConfigurationUserFn()
  }
}

export default function* commonSagas() {
  yield all([
    yield takeEvery('GET_ATTENTION_CONFIGURATION_USER', getAttentionConfigurationUserFn),
    yield takeEvery('ADD_DEL_ATTENTION_CONFIGURATION_USER', AddDelAttentionConfigurationUserFn),
  ])
}