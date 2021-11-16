import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../src/assets/style/global.css"  // 引入全局的css样式
import "../src/common/rem.js"   // 移动端适配rem.js文件
import "../src/pluginunit/vant.js"  // 按需导入 vant 组件
import VConsole from 'vconsole'
import VueAMap from 'vue-amap';

Vue.use(VueAMap);
Vue.config.productionTip = false


// 开发环境下面使用vConsole进行调试, 生产环境production(线上)上就不显示
if (process.env.NODE_ENV === 'development') {
    const vConsole = new VConsole();
  }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
