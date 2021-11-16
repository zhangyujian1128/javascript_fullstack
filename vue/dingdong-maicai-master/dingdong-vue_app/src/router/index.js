import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/index'
  },
  {
      path:'/index',
      component: ()=> import('../views/index/Index.vue'),
      children:[
          {
              path:'',
              redirect:'/home'
          },
        {
            name: 'Home',
            path: '/home',
            component: ()=> import("../views/home/Home.vue")
          },
          {
              name:'Category',
              path:'/category',
              component: ()=> import('../views/category/Category.vue')
          },
          {
              name:'Cate',
              path:'/index/cart',
              component: ()=> import('../views/cart/Cart.vue')
          },
          {
              name:'Profile',
              path:'/profile',
              component: ()=> import('../views/profile/Profile.vue')
          }
      ]
  },
  {
    name:'Login',
    path:'/login',
    component: ()=> import('../views/login/Login.vue')
  },
  {
      name:'Detail',
      path:'/detail',
      component: ()=> import('../views/detail/Detail.vue')
  },
  {
      name:'aboutWe',
      path:'/about',
      component: ()=> import('../views/about/aboutWe.vue')
  },
  {
      name:'MyCenter',
      path:'/myCenter',
      component: ()=> import('../views/my_center/MyCenter.vue')
  },
  {
      name:'OrderDetail',
      path:'/orderDetail',
      component: ()=> import('../views/orderDetail/OrderDetail.vue')
  },
  {
    name:'AddAddress',
    path:'/addAddress',
    component: ()=> import('../views/address/AddAddress')
  },
  {
    name:'EditAddress',
    path:'/editAddress',
    component: ()=> import('../views/address/EditAddress.vue')
  },
  {
      name:"Amap",
      path:'/amap',
      component: ()=> import('../views/amap/Amap.vue')
  },
  {
      name:"Video",
      path:'/video',
      component:()=> import('../views/video/Video.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
