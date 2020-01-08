import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import service from "./utils/http";
import urls from "./utils/urls";
import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi)
Vue.prototype.$https = service
Vue.prototype.$urls = urls

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
