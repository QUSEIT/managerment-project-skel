import axios from '../libs/api.request'

export const getAssociationLabel = () => {
  return axios.request({
    url: '/manager/relevance/tag/list',
    method: 'GET'
  })
}

export const editAssociationLabel = (oJson) => {
  const data = {
    label_name: oJson.name,
    label_id: oJson.id,
    mark: oJson.mark
  }
  return axios.request({
    url: '/manager/relevance/tag/list',
    data,
    method: 'POST'
  })
}

export const editLabelList = (oJson) => {
  const data = {
    label_name: oJson.name,
    label_id: oJson.id,
    mark: oJson.mark
  }
  return axios.request({
    url: '/manager/relevance/tag/list',
    data,
    method: 'POST'
  })
}




