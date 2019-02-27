import axios from '../libs/api.request'

export const editModifyPassword = (oJson) => {
  const data = {
    new_password: oJson.password,
    old_password: oJson.confirmpwd
  }
  return axios.request({
    url: '/manager/modify/password',
    data,
    method: 'POST'
  })
}
