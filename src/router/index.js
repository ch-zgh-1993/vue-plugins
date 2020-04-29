/*
* @Author: Zhang Guohua
* @Date:   2020-04-28 19:57:00
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-29 10:36:16
* @Description: create by zgh
* @GitHub: Savour Humor
*/
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
