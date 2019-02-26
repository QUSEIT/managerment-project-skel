import axios from '../libs/api.request'

export const getBotQrcode = () => {
  return axios.request({
    url: 'manager/bot_qrcode',
    method: 'GET'
  })
}

export const getBotStateList = () => {
  return axios.request({
    url: 'manager/bot_state',
    method: 'GET'
  })
}
