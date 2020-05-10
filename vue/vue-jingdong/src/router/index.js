import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Shouye from '@/components/Shouye'
import Tushu from '@/components/Tushu'
import Shouji from '@/components/Shouji'
import Shipin from '@/components/Shipin'
import Shenxian from '@/components/Shenxian'
import Yundong from '@/components/Yundong'
import Bangong from '@/components/Bangong'

import Sort from '@/components/Sort'
import Discover from '@/components/Discover'
import Cart from '@/components/Cart'
import Mine from '@/components/Mine'

import Search from '@/components/Search'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      redirect:'/Home/Shouye',
      children:[
        {
          path: 'Shouye',
          name: 'Shouye',
          component: Shouye
        },
        {
          path: 'Tushu',
          name: 'Tushu',
          component: Tushu
        },
        {
          path: 'Shouji',
          name: 'Shouji',
          component: Shouji
        },
        {
          path: 'Shipin',
          name: 'Shipin',
          component: Shipin
        },
        {
          path: 'Shenxian',
          name: 'Shenxian',
          component: Shenxian
        },
        {
          path: 'Yundong',
          name: 'Yundong',
          component: Yundong
        },
        {
          path: 'Bangong',
          name: 'Bangong',
          component: Bangong
        }
      ]
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
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
