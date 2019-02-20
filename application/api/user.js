import axios from '../libs/api.request'

export const login = ({ userName, password }) => {
  const data = {
    account: userName,
    password: password
  }
  return axios.request({
    url: 'manager/login',
    data,
    method: 'POST'
  })
}


