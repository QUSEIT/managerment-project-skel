import { login } from "../../api/user"
import { ERR_OK } from "../../api/config"
import {
  all,
  put,
  takeEvery,
} from 'redux-saga/effects'
// import Cookies from "js-cookie"
import Router from "next/router"

function* onLogInFn(payload) {
  login(payload.data).then(res => {
    // Cookies.set('token', 'logined', { expires: 7, path: '' })
    if (res.errno === ERR_OK) Router.push('/management/topicManagement')
  }).catch(err => {
    console.log(err)
  })
}

export default function* commonSagas() {
  yield all([
    yield takeEvery('LOGIN', onLogInFn),
  ])
}
