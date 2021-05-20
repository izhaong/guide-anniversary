/*
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2021-05-20 11:02:47
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2021-05-20 17:16:09
 */

// import Vue from 'vue'
import axios from 'axios'
import request from '@/utils/request.js'
// ---------
// Vue.prototype.$api = {
//   getSubject: request.get('static/subject.json')
// }

// ---- full screen
import screenfull from 'screenfull'
const getConfig = () => {
  return axios.get('static/config.json').then(({ data }) => {
    window.localStorage.setItem('machineID', data.machineID)
  })
}
const getSubject = () => {
  request.get('static/subject.json').then(res => {
    window.localStorage.setItem('subject', JSON.stringify(res))
  })
}
getConfig()
getSubject()

if (screenfull.isEnabled) {
  screenfull.request()
}
