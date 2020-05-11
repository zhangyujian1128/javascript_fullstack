<template>
  <div>
    <!-- 头部搜索区域 -->
    <div class="container-header">
      <div class="header">
        <div class="input">
          <img class="front" src="../assets/search.png" alt />
          <router-link to="/Search">
            <input class="search" type="text" placeholder="TOPSPORTS耐克满300减60" />
          </router-link>
          <img class="behind" src="../assets/camera.png" alt="">
        </div>
        <div class="scan">
          <img class="scanlogo" src="../assets/scan.png" alt="">
          <p class="scantitle">扫一扫</p>
        </div>
        <div class="news">
          <img class="newslogo" @click="gotonews" src="../assets/news.png" alt="">
          <p class="newstitle">消息</p>
        </div>
      </div>
    </div>
    
    <!-- 广告区域 非点击 -->
    <img class="logo" src="../assets/logo.jpg" alt />
    <!-- 分类 -->
    <div class="scroll">
        <router-link class="item-list"
         v-for="(item, index) in items" :to="item.route" :key="index">
          <p class="name">
            {{item.name}}
          </p>
        </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {name:'首页',route: 'Shouye'},
        {name:'图书',route: 'Tushu'},
        {name:'手机',route: 'Shouji'},
        {name:'食品',route: 'Shipin'},
        {name:'生鲜',route: 'Shenxian'},
        {name:'运动',route: 'Yundong'},
        {name:'办公',route: 'Bangong'}
      ]
    }
  },
  methods:{
    gotonews(){
      this.$router.push('/News')
    }
  }
};
</script>

<style>
.container-header{
  height: 50px;
}
.header{
  position: fixed;
  width: 100%;
  height: 50px;
  background: rgb(197, 18, 18);
  color: white;
}
.input {
  float: left;
  position: relative;
  width: 75%;
  top: 8px;
}
.search {
  width: 65%;
  height: 32px;
  font-size: 14px;
  border: 1px solid rgb(206, 206, 206);
  border-radius: 20px;
  padding-left: 40px;
  margin-left: 10px;
  padding-right: 40px;
}
.front {
  position: absolute;
  width: 25px;
  height: 25px;
  left: 5%;
  top: 15%;
}
.behind {
  position: absolute;
  width: 25px;
  height: 25px;
  right: 6%;
  top: 15%;
}
.scan{
  float: left;
  font-size: 10px;
  width: 12.5%;
  margin-top: 8px;
  text-align: center;
}
.scanlogo{
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 auto;
}
.news{
  float: left;
  font-size: 10px;
  width: 12.5%;
  margin-top: 8px;
  text-align: center;
}
.newslogo{
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 auto;
}
.scantitle{
  margin-top: 3px;
} 
.newstitle{
  margin-top: 3px;
}
.logo {
  width: 100%;
  height: 140px;
}
.scroll{
  height: 40px;
  width: 100%;
  color: rgb(235, 235, 235);
  overflow-x: scroll;
  white-space: nowrap;
  border-bottom: 1px solid rgb(209, 209, 209);
}
.scroll::-webkit-scrollbar{
  display: none;
}
.item-list{
  display: inline-block;
  height: 30px;
  line-height: 30px;
  text-align: center;
  width: 40px;
  overflow-x: scroll;
  margin: 0 25px;
  padding-bottom: 4px;
  
  text-decoration: none;
}
.router-link-active{
  color: red;
  border-bottom: 1px solid red;
}
</style>