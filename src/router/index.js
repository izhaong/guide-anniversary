/*
 * @Description:
 * @Author: 仲灏<izhaong 164165005@qq.com>
 * @Date: 2021-05-17 09:56:13
 * @LastEditors: 仲灏<izhaong 164165005@qq.com>
 * @LastEditTime: 2021-05-21 16:56:48
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import StartUp from '../views/StartUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StartUp',
    component: StartUp
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/secPage',
    name: 'SecPage',
    component: () => import(/* webpackChunkName: "secPage" */ '../views/SecPage.vue')
  },
  {
    path: '/secPage/:id',
    name: 'SecPage',
    component: () => import(/* webpackChunkName: "secPage" */ '../views/SecPage.vue')
  },
  {
    path: '/items/:id',
    name: 'Items',
    component: () => import(/* webpackChunkName: "Items" */ '../views/Items.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import(/* webpackChunkName: "article" */ '../views/Article.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 })
})

export default router
