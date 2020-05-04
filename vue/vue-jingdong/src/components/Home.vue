<template>
  <div>
    <!-- 姚贝娜 朱克 高毅 萱萱 侯磊 张目 田园
    梦楠 六才行 陛下 单冲锋 田丹 张以呀 张恒远
    李秋泽 王拓 梁君诺 李琦 张雅婷 张鑫 塔斯肯
    网红地 武穆兰 苏梦 精锐戟 葛洪与 蘑菇兄弟 邓股 -->
    <img class="logo" src="../assets/logo.jpg" alt />
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
        <img class="newslogo" src="../assets/news.png" alt="">
        <p class="newstitle">消息</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo {
  width: 100%;
  height: 140px;
}
.header{
  width: 100%;
  height: 34px;
}
.input {
  float: left;
  position: relative;
  width: 75%;
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
  font-size: 8px;
  width: 12.5%;
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
  font-size: 8px;
  width: 12.5%;
  text-align: center;
}
.newslogo{
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 auto;
}
.scantitle .newstitle{
  color: rgb(255, 255, 255);
}
</style>