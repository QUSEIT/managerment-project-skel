import { getForumTitle, getForumLogin, setForumLogin, resetToken } from "../../api/moreOperating"
import { ERR_OK } from "../../api/config"
import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects'

function* getForumTitleFn(payload) {
  const response = yield getForumTitle()
  if (response.errno === ERR_OK) {
    payload.callBack(response.data)
  }
}

function* getForumLoginFn(payload) {
  const response = yield getForumLogin()
  if (response.errno === ERR_OK) {
    yield put({ type: 'FORUM_LOGIN_STATUS', forumLoginStatus: response.status })
  }
}

function* setForumLoginFn(payload) {
  const response = yield setForumLogin(payload.status)
  if (response.errno === ERR_OK) {
    yield getForumLoginFn()
  }
}

function* setResetToken(payload) {
  const response = yield resetToken()
  if (response.errno === ERR_OK) {
    alert('重置成功...')
  }
}

export default function* commonSagas() {
  yield all([
    yield takeEvery('GET_FORUM_TITLE', getForumTitleFn),
    yield takeEvery('GET_FORUM_LOGIN', getForumLoginFn),
    yield takeEvery('SET_FORUM_LOGIN', setForumLoginFn),
    yield takeEvery('SET_RESET_TOKEN', setResetToken),
  ])
}