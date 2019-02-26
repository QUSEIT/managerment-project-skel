import axios from '../libs/api.request'

export const getMemberList = (page) => {
  return axios.request({
    url: '/manager/user/list?page=' + page,
    method: 'GET'
  })
}

export const addUser = (oJson) => {
  const data = oJson

  return axios.request({
    url: '/manager/user/create',
    data,
    method: 'POST'
  })
}

