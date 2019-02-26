import { getBotStateList, getBotQrcode } from "../../api/createRobot"
import { ERR_OK } from "../../api/config"
import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects'

function* getBotStateQrcodeFn(payload) {
  const response = yield getBotQrcode()
  if (response.errno === ERR_OK) {
    yield put({ type: 'CREATE_ROBOT_QRCODE', createRobotQrcode: response.data })
  }
}

function* getBotStateListFn(payload) {
  const response = yield getBotStateList()
  if (response.errno === ERR_OK) {
    yield put({ type: 'CREATE_ROBOT_LIST', createRobotList: response.data })
  }
}

export default function* commonSagas() {
  yield all([
    yield takeEvery('GET_CREATE_ROBOT_QRCODE', getBotStateQrcodeFn),
    yield takeEvery('GET_CREATE_ROBOT_LIST', getBotStateListFn),
  ])
}