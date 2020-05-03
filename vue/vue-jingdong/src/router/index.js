import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sort from '@/components/Sort'
import Discover from '@/components/Discover'
import Cart from '@/components/Cart'
import Mine from '@/components/Mine'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Sort',
      name: 'Sort',
      component: Sort
    },
    {
      path: '/Discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
