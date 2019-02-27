import { editModifyPassword } from "../../api/setting"
import { ERR_OK } from "../../api/config"
import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects'

function* onEditModifyPasswordFn(payload) {
  const response = yield editModifyPassword(payload.data)
  if (response.errno === ERR_OK) {
    if (payload.data.mark === 0) {
      alert('修改成功')
    } else {
      alert(response.msg)
    }
  }
}

export default function* commonSagas() {
  yield all([
    yield takeEvery('EDIT_MODIFY_PASSWORD', onEditModifyPasswordFn),
  ])
}