<template>
  <div id="app">
    <div class="welcomepage" v-if="clickstart">
      <img src="./assets/welcome.jpg" alt="">
      <div class="welcome">
        <p class="welcometitle">欢迎使用京东</p>
        <p>正品低价、极速配送</p>
        <p>点缀您的品质生活</p>
        <button class="start" @click="start">开始</button>
      </div>
    </div>

    <div class="tab" v-if="!clickstart">
      <div class="tab-item">
        <router-link to="/Home">首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/Sort">分类</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/Discover">发现</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/Cart">购物车</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/Mine">我的</router-link>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      //数据
      clickstart: true
    }
  },
  methods:{
    start(){
      this.clickstart = false
      this.$router.push('/Home')
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
img{
  width: 100%;
  height: 100%;
}
.welcome{
  text-align: center;
}
.welcometitle{
  padding-bottom: 20px;
  letter-spacing: 2px;
  font-size: 30px;
  font-weight: 500;
}
.start{
  margin-top: 50px;
  width: 320px;
  height: 40px;
  background: rgb(255, 35, 35);
  border: 0px solid white;
  border-radius: 20px;
  color: white;
  font-size: 16px;
}
.tab{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: rgb(255, 255, 255);
  z-index: 999;
}
.tab-item{
  width: 20%;
  text-align: center;
}
</style>
