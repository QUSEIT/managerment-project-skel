import axios from 'axios'
import { apiBaseUrl } from './config'

// GET请求
export function getRequest (url, params) {
    return new Promise((resolve, reject) => {
        axios.get(apiBaseUrl + url, params)
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)                
            })
            .catch((error) => {
                reject(err)
            })
    })
}

// POST请求
export function postRequest (url, params) {
    return new Promise((resolve, reject) => {
        axios.post(apiBaseUrl + url, params)
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)                
            })
            .catch((error) => {
                reject(err)
            })
    })
}

export const ERR_OK = 0
export const ERR_403 = 403