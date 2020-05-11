<template>
  <div>
    <div class="news-top">
        <img @click="gotoHome" class="news-return" src="../assets/return.png" alt="">
        <span class="news-title">消息</span>
    </div>
    <div class="news-item">
        <div class="news-container">
            <img class="news-img" src="../assets/kefu.jpg" alt="">
            <div class="news-box">
                <span class="news-name">京东客服</span>
                <img class="news-official" src="../assets/guanfang.png" alt="">
                <p class="news-time"> 17:04</p>

                <p class="news-word">自助服务</p>
                
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        gotoHome(){
            this.$router.push('/Home/Shouye')
        }
    }
}
</script>
    
<style>
.news-top{
    height: 40px;
    border-bottom: 8px solid rgb(231, 231, 231);
}
.news-return{
    width: 20px;
    height: 20px;
    margin-top: 10px;
}
.news-title{
    display: inline-block;
    width: 320px;
    text-align: center;
}
.news-item{
    margin-top: 20px;
}
.news-container{
    display: inline-block;
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgb(238, 238, 238);
}
.news-img{
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 10px;
}
.news-box{
    display: inline-block;
    position: relative;
    margin-left: 10px;
    width: 300px;
    
}
.news-name{
    font-size: 18px;
}
.news-official{
    width: 30px;
    height: 16px;
}
.news-word{
    color: rgb(143, 143, 143);
    font-size: 14px;
}
.news-time{
    position: absolute;
    right: 0;
    bottom: 20px;
}
</style>