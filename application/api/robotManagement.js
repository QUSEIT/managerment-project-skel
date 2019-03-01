import axios from '../libs/api.request'

export const getBotAllowList = () => {
  return axios.request({
    url: '/manager/bot_allow',
    method: 'GET'
  })
}

export const setBotAllowList = (postData) => {
  const data = postData
  return axios.request({
    url: '/manager/bot_allow',
    data,
    method: 'POST'
  })
}


export const getBotFakerUserList = () => {
  return axios.request({
    url: '/manager/bot_faker_user',
    method: 'GET'
  })
}

export const editFakerUser = (postData) => {
  const data = postData
  return axios.request({
    url: '/manager/bot_faker_user',
    data,
    method: 'POST'
  })
}
