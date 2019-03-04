import axios from '../libs/api.request'

export const getForumTitle = () => {
  return axios.request({
    url: '/community/forum_title',
    method: 'GET'
  })
}

export const getForumLogin = () => {
  return axios.request({
    url: '/manager/forum_login',
    method: 'GET'
  })
}

export const setForumLogin = (data) => {
  return axios.request({
    url: '/manager/forum_login',
    data,
    method: 'POST'
  })
}

export const resetToken = () => {
  return axios.request({
    url: '/manager/reset_access_token',
    method: 'POST'
  })
}

