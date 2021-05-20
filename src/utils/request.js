/*
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2021-02-02 11:42:03
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2021-05-20 16:21:39
 */
import axios from 'axios'
import { Toast } from 'vant'
// import store from '@/store'

// create an axios instance
const service = axios.create({
  baseURL: './',
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code * 1 !== 200) {
      Toast({
        message: res.msg || 'Error',
        type: 'fail',
        duration: 2 * 1000
      })
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Toast({
      message: error.message,
      type: 'fail',
      duration: 2 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
