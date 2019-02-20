import env from './env'

// const BASE_API = 'http://' + window.location.href.split('/')[2] + '/forum-api/'
//
// const DEV_URL = BASE_API
// const PRO_URL = BASE_API
const DEV_URL = 'http://xiaoxin-dev.qpython.com.cn/forum-api/'
const PRO_URL = 'http://xiaoxin-dev.qpython.com.cn/forum-api/'

export default env === 'development' ? DEV_URL : PRO_URL
