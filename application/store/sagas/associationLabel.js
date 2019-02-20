import { getAssociationLabel } from "../../api/associationLabel"
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

export default function* commonSagas() {
  yield all([
    yield takeEvery('GET_ASSOCIATION_LABEL', getAssociationLabelFn),
  ])
}