import Vue from 'vue'
import Router from 'vue-router'
import Show from '@/components/form/show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Show',
      component: Show
    }
  ]
})
