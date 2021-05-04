<template>
  <div id="app">

    <!-- 欢迎界面 -->
    <v-welcome v-on:miss="controlWelcome"></v-welcome>
    
    <!-- 底部导航栏 -->

    <div class="tab" v-if="!click">

      <div class="tab-item">
        <router-link class="a" to="/Home">
          <img class="icon" src="./assets/home.png" alt="">
          首页
        </router-link>
      </div>

      <div class="tab-item">
        <router-link class="a" to="/Sort">
          <img class="icon" src="./assets/sort.png" alt="">
          分类
        </router-link>
      </div>

      <!-- <div class="tab-item">
        <router-link class="a" to="/Discover">
          <img class="icon" src="./assets/discover.png" alt="">
          发现
        </router-link>
      </div> -->

      <div class="tab-item">       
        <router-link class="a" to="/Cart">
          <img class="icon" src="./assets/cart.png" alt="">
          购物车
        </router-link>
      </div>

      <div class="tab-item">
        <router-link class="a" to="/Mine">
          <img class="icon" src="./assets/mine.png" alt="">
          我的
        </router-link>
      </div>

    </div>

    <router-view/>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
export default {
  name: 'App',
  data(){
    return{
      //数据
      click: true
    }
  },
  components:{
    'v-welcome':Welcome
  },
  methods:{
    controlWelcome(e){
      this.click = e
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.tab{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-top: 1px solid rgb(185, 185, 185);
  background: rgb(245, 245, 245);
  z-index: 999;
}
.tab-item{
  width: 25%;
  text-align: center;
}
.icon{
  display: block;
  margin: auto;
  margin-top: 8px;
  width: 25px;
  height: 25px;
}
.a{
  text-decoration: none;
  color: rgb(95, 95, 95);
  font-size: 12px;
  line-height: 12px;
}
.router-link-active{ 
 color: red;
}
</style>
