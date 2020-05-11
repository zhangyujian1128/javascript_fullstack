<template>
  <div>
      <div class="search-header">
        <router-link to="/Home/Shouye">
          <img class="return" src="../assets/return.png" alt="">
        </router-link>
        
        <img class="search-front" src="../assets/search.png" alt />
        <input class="search-search" type="text" placeholder="iphoneX" />
        <span class="ss">搜索</span>
      </div>

      <div class="search-container">
        <p class="search-title">搜索发现</p>
        <div class="search-hot">
          <div class="hot-title" v-for="(item, index) in hot" :key="index">
            {{item}}
          </div>
        </div>
      </div>
      <div class="last">

      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      hot:['燃气热水器','热水壶','吃货嘉年华','不锈钢蒸锅','移动书架','电脑桌','计算器','按摩椅','健身','广角镜头手机']
    }
  }
}
</script>

<style>
.search-header{
  position: relative;
  height: 60px;
  width: 100%;
}
.return{
  position: relative;
  width: 20px;
  height: 20px;
  top: 6px;
  left: 5px;
}
.search-front{
  width: 20px;
  height: 20px;
  position: absolute;
  top: 22px;
  left: 42px;
}
.search-search{
  width: 50%;
  height: 30px;
  font-size: 14px;
  border: 1px solid rgb(206, 206, 206);
  border-radius: 20px;
  padding-left: 40px;
  margin-left: 10px;
  padding-right: 40px;
  margin-top: 15px;
  background: rgb(235, 235, 235);
}
.ss{
  margin-left: 10px;
  color: rgb(112, 112, 112);
}
.search-title{
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
}
.search-hot{
  margin-top: 20px;
  border-bottom: 1px solid rgb(226, 226, 226);
}
.hot-title{
  display: inline-block;
  width: 40%;
  margin-bottom: 10px;
  margin-left: 20px;
}
.last{
  width: 100%;
  height: 400px;
  background: rgb(245, 245, 245);
}
</style>