import { getAdminUserList } from "../../api/backstageUserManagement"
import { ERR_OK } from "../../api/config"
import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects'

function* getAdminUserListFn(payload) {
  const response = yield getAdminUserList()
  if (response.errno === ERR_OK) {
    yield put({ type: 'ADMIN_USER_LIST', adminUserList: response.data })
  }
}

export default function* commonSagas() {
  yield all([
    yield takeEvery('GET_ADMIN_USER_LIST', getAdminUserListFn),
  ])
}