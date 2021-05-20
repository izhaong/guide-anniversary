/*
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2021-05-20 16:05:28
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2021-05-20 16:19:39
 */
import request from '@/utils/request.js'
export function getArticleList () {
  return request.get('static/artiList.json')
}
