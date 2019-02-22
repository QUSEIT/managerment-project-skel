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

export const getTopicDatail = (topicId) => {
  return axios.request({
    url: '/manager/topic/management/?topic_id=' + topicId,
    method: 'GET'
  })
}

export const getUserList = (page) => {
  return axios.request({
    url: '/manager/user/list?page=' + page,
    method: 'GET'
  })
}

export const publishTopic = (postData) => {
  const data = postData

  return axios.request({
    url: '/manager/topic/create',
    data,
    method: 'POST'
  })
}

export const editTopicDetail = (postData) => {
  const data = postData

  return axios.request({
    url: '/manager/topic/edit',
    data,
    method: 'POST'
  })
}
