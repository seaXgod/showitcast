import Vue from 'vue'
import Router from 'vue-router'

import homePage from '@/views/homepage'
import Login from '@/views/login'
//element-ui
import ElementUI from 'element-ui'
import http from '@/assets/http.js'


Vue.use(Router)
Vue.use(ElementUI)
Vue.use(http)


export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: {name: 'login'}
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'homepage',
      path: '/homepage',
      component: homePage
    }
  ]
})
