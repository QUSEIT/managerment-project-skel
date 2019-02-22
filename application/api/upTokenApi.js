import axios from '../libs/api.request'
import oAxios from 'axios'

export const getUpToken = () => {
  return axios.request({
    url: 'manager/get_token',
    method: 'GET'
  })
}

export function uploadQiniuFn (param) {
  const config = {headers: {'Content-Type': 'multipart/form-data'}}
  return new Promise((resolve, reject) => {
    oAxios.post('http://upload.qiniu.com/', param, config).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}

export const bktClouddnUrl = 'http://qiniu.wegox.cn/'
