/*
* @Author: Zhang Guohua
* @Date:   2020-04-28 19:57:00
* @Last Modified by:   zgh
* @Last Modified time: 2020-04-30 15:54:43
* @Description: create by zgh
* @GitHub: Savour Humor
*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import scrollLoad from 'vue-scroll-render'

Vue.use(scrollLoad)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
