import { getMemberList } from "../../api/userManagement"
import { ERR_OK } from "../../api/config"
import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects'

function* getMemberListFn(payload) {
  const response = yield getMemberList(payload.page)
  if (response.errno === ERR_OK) {
    yield put({ type: 'MEMBER_LIST', memberList: response.data })
  }
}

export default function* commonSagas() {
  yield all([
    yield takeEvery('GET_MEMBER_LIST', getMemberListFn),
  ])
}