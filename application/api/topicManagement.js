import axios from '../libs/api.request'

export const getTopicList = (oJson) => {
  return axios.request({
    url: '/manager/topic/list?classify_id=' + oJson.selectTopicIdx + '&is_release=' + oJson.topicNavIdx + '&page=' + oJson.pageLength,
    method: 'GET'
  })
}
