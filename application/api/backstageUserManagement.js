import axios from '../libs/api.request'

export const getAdminUserList = () => {
  return axios.request({
    url: '/manager/create/user?page=1',
    method: 'GET'
  })
}
