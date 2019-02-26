import { getMemberList, addUser } from "../../api/userManagement"
import { ERR_OK } from "../../api/config"
import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects'
import Router from "next/router"

function* getMemberListFn(payload) {
  const response = yield getMemberList(payload.page)
  if (response.errno === ERR_OK) {
    yield put({ type: 'MEMBER_LIST', memberList: response.data })
  }
}

function* onAddUserFn(payload) {
  const response = yield addUser(payload.data)
  if (response.errno === ERR_OK) {
    Router.push('/management/userManagement')
    alert('创建成功')
  }
}

export default function* commonSagas() {
  yield all([
    yield takeEvery('GET_MEMBER_LIST', getMemberListFn),
    yield takeEvery('ADD_USER_MANAGEMENT', onAddUserFn)
  ])
}