import { getAssociationLabel, editLabelList } from "../../api/associationLabel"
import { ERR_OK } from "../../api/config"
import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects'

function* getAssociationLabelFn(payload) {
  const response = yield getAssociationLabel()
  if (response.errno === ERR_OK) {
    yield put({ type: 'ASSOCIATION_LABEL_LIST', labelList: response.data })
  }
}

function* onDelEditAddLabelFn(payload) {
  const response = yield editLabelList(payload.data)
  yield getAssociationLabelFn()
  if (response.errno === ERR_OK) {
    if (payload.data.mark === 0) {
      alert('移除成功!')
    }
    if (payload.data.mark === 1) {
      alert('添加成功!')
    }
    if (payload.data.mark === 2) {
      alert('修改成功!')
    }
  }
}

export default function* commonSagas() {
  yield all([
    yield takeEvery('GET_ASSOCIATION_LABEL', getAssociationLabelFn),
    yield takeEvery('DEL_EDIT_ADD_LABEL', onDelEditAddLabelFn),
  ])
}