'use strict'

import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// let baseURL = ''
// switch (process.env.NODE_ENV) {
//   case 'development':
//     baseURL = 'http://mall-pre.springboot.cn/api'
//     break
//   case 'prod':
//     baseURL = 'http://mall-pre.springboot.cn/api'
//     break
//   default:
//     baseURL = 'http://mall-pre.springboot.cn/api'
//     break
// }
const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // baseURL: baseURL,
  baseURL: '/api',
  timeout: 60 * 1000, // Timeout
  withCredentials: true // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    const res = response.data
    if (res.status !== 0) {
      if (res.status === 10) {
        window.location.href = '/login'
      }
      Message.error(res.msg)
      Promise.reject(res)
    }
    return res.data
  },
  function (error) {
    alert(error)
    // Do something with response error
    return Promise.reject(error)
  }
)

Plugin.install = function (Vue, options) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
