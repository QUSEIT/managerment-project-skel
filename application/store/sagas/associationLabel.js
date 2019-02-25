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

function* onDelLabelFn(payload) {
  const response = yield editLabelList(payload.data)
  if (response.errno === ERR_OK) {
    yield getAssociationLabelFn()
    alert('移除成功!')
  }
}

export default function* commonSagas() {
  yield all([
    yield takeEvery('GET_ASSOCIATION_LABEL', getAssociationLabelFn),
    yield takeEvery('DEL_LABEL', onDelLabelFn),
  ])
}