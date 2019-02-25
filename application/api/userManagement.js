import axios from '../libs/api.request'

export const getMemberList = (page) => {
  return axios.request({
    url: '/manager/user/list?page=' + page,
    method: 'GET'
  })
}
