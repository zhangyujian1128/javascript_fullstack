<template>
  <div>
    <!-- 顶部地址，输入框，查找 -->
    <div class="search-bar">
      <van-row class="row">
        <van-col class="col" span="3">
          <img :src="locationIcon" width="80%" height="80%" class="location-icon" alt="">
        </van-col>
        <van-col class="col" span="16">
          <input type="text" class="search-input" />
        </van-col>
        <van-col class="col search-mini" span="5">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- 轮播图 -->
    <div>
      <div class="swiper-area">
        <van-swipe :autoplay="autoPlayTime">
          <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
            <img src="banner" width="100%" height="200px" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      msg: 'Shopping Mall',
      locationIcon: require('../../assets/images/location.png'),
      bannerPicArray: [
        
      ],
      autoPlayTime: 4000
    }
  }
}
</script>

<style>
  .search-bar{
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
  }
  .row{
    height: 100%;
  }
  .col{
    height: 100%;
    text-align: center;
  }
  .location-icon{
    padding-top: 10%;
  }
  .search-input{
    width: 100%;
    height: 1.3rem;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid #fff;
    background-color: #e5017d;
    padding: 0px 0px;
    color: #fff;
  }
  .search-mini{
    text-align: center;
  }
</style>