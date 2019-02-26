import axios from '../libs/api.request'

export const getAttentionConfigurationUser = () => {
  return axios.request({
    url: '/manager/user/default/followers',
    method: 'GET'
  })
}

export const AddDelAttentionConfigurationUser = (oJson) => {
  const data = oJson
  return axios.request({
    url: '/manager/user/default/followers',
    data,
    method: 'POST'
  })
}
