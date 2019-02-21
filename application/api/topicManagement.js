import axios from '../libs/api.request'

export const getTopicList = (oJson) => {
  return axios.request({
    url: '/manager/topic/list?is_release=' + oJson.topicStatusId + '&classify_id=' + oJson.topicTypeId + '&page=' + oJson.pageLength,
    method: 'GET'
  })
}

export const getTopicTypeList = () => {
  return axios.request({
    url: '/manager/topic/classify',
    method: 'GET'
  })
}

export const getUserList = (page) => {
  return axios.request({
    url: '/manager/user/list?page=' + page,
    method: 'GET'
  })
}