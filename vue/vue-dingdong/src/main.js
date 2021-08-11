// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vant from 'vant'        不推荐引入整个vant，会造成加载时间过长，按需引入
// import 'vant/lib/vant-css/index.css'
// Vue.use(Vant)

import {Button, Row, Col, Swipe, SwipeItem, Lazyload} from 'vant'        //按需引入
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})