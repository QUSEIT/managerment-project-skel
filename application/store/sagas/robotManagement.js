import { getBotAllowList, setBotAllowList, getBotFakerUserList, editFakerUser } from "../../api/robotManagement"
import { ERR_OK } from "../../api/config"
import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects'

function* getBotAllowListFn(payload) {
  const response = yield getBotAllowList()
  if (response.errno === ERR_OK) {
    yield put({ type: 'ROBOT_ALLOW_LIST', robotAllowList: response.data })
  }
}

function* setBotAllowListFn(payload) {
  const response = yield setBotAllowList(payload.data)
  if (response.errno === ERR_OK) {
    yield getBotAllowListFn()
    alert('操作成功...')
  }
}

function* getBotFakerUserListFn(payload) {
  const response = yield getBotFakerUserList()
  if (response.errno === ERR_OK) {
    yield put({ type: 'ROBOT_MANAGEMENT_LIST', robotManagementList: response.data })
  }
}

function* editFakerUserFn(payload) {
  const response = yield editFakerUser(payload.data)
  if (response.errno === ERR_OK) {
    if (payload.data.type === 0) {
      alert('设置成功...')
    }
    if (payload.data.type === 1) {
      alert('删除成功...')
    }
    yield getBotFakerUserListFn()
  }
}

export default function* commonSagas() {
  yield all([
    yield takeEvery('GET_BOT_ALLOW_LIST', getBotAllowListFn),
    yield takeEvery('SET_BOT_ALLOW_LIST', setBotAllowListFn),
    yield takeEvery('GET_BOT_FAKER_USER_LIST', getBotFakerUserListFn),
    yield takeEvery('SET_EDIT_FAKER_USER', editFakerUserFn),
  ])
}