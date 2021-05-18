// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',          //将vue挂载在id为app的元素上
  router,
  components: { App }, //将组件App.vue引入
  template: '<App/>'
})
