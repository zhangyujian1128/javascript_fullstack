<template>
  <div>
      <div class="book-container">
            <router-link to="/Home/Shouye">
                <img class="book-return" src="../assets/return.png" alt="">
            </router-link>

            <img class="book-image" src="../assets/book/javascript.jpg" alt="">

            <div class="book-details">
                <div class="book-price">
                    <div class="book-nowprice">
                        <span class="book-redprice">￥78.00</span>
                        <img class="book-vip" src="../assets/book/vip.png" alt="">
                        <div class="shoucang">
                            <img class="book-like" src="../assets/book/love.png" alt="">
                            <span class="likepeople">0.9万</span>
                        </div>
                    </div>
                    <div class="book-lastprice">
                        <span class="lastprice">￥99.00</span>
                        <span class="zhekou">7.9折</span>
                    </div>
                </div>
                <div class="book-title">
                    <img class="book-ziying" src="../assets/book/ziying.png" alt="">
                    <p class="book-name">JavaScript高级程序设计（第3版）</p>
                </div>
                <div class="book-introduce">
                    <span>前端开发经典丛书JavaScript技术名著web前端开发国内js一书掌握JavaScript编程艺术</span>
                </div>
            </div>
            <div class="coupon">
                <span class="coupon-title">优惠</span>
                <div class="coupon-container">
                    <div v-for="(item, index) in coupon" :key="index" class="coupon-item">
                        <span class="front-coupon">{{item.name}}</span>
                        <span class="last-coupon">{{item.detail}}</span>
                    </div>
                </div>
            </div>
            <div class="activity">
                <span class="activity-name">活动</span>
                <span class="highmoney">高价回收</span>
                <span class="hope">助力环保，传递知识，旧书换新</span>
            </div>
            <div class="author">
                <span class="author-show">作者</span>
                <span class="author-name">[美]Nicholas C.Zakas</span>
            </div>
            <div class="publish">
                <span class="publish-show">出版社</span>
                <span class="publish-name">人民邮电出版社</span>
            </div>
      </div>
      <div class="fixed">
          <div class="gotocart">
              <img class="book-cart" @click="gotocart" src="../assets/cart.png" alt="">
          </div>
          
          <p @click="joinincart" class="joinincart">加入购物车</p>
          <p class="buyitnow">立即购买</p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            coupon:[
                {name: '白条新人', detail: '领立减80元优惠券'},
                {name: '领券', detail: '满600减50,满400减30'},
                {name: 'PLUS限购', detail: 'PLUS会员购买不超过五件'},
                {name: '加价购', detail: '满10元另加26.9元'},
                {name: '满额返券', detail: '自营图书订单金额满20元返25元优惠券'}
            ]
        }
    },
    methods:{
        joinincart(){
            // if(user === false){
            //     this.$router.push('/Login')
            // }else{
            //     this.$router.push('/Cart')
            // }
        },
        gotocart(){
            this.$router.push('/Cart')
        }
    }
}
</script>

<style>
.book-container{
    position: relative;
    width: 100%;
    height: 560px;
    overflow-y: scroll;
}
.book-return{
    position: fixed;
    width: 25px;
    height: 25px;
    top: 5px;
    left: 5px;
}
.book-image{
    height: 375px;
}
.book-details{
    width: 340px;
    margin: 0 auto;
    margin-top: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(194, 194, 194);
}
.book-price{
    margin-bottom: 5px;
}
.book-nowprice{
    position: relative;
}
.book-redprice{
    color: red;
    font-size: 20px;
}
.book-vip{
    width: 40px;
    height: 22px;
}
.shoucang{
    display: inline-block;
    position: absolute;
    right: 0;
}
.book-like{
    display: block;
    width: 12px;
    height: 12px;
    margin: 0 auto;
}
.likepeople{
    font-size: 10px;
}
.book-lastprice{
    margin-top: 5px;
    margin-bottom: 20px;
    
}
.lastprice{
    font-size: 14px;
    color: rgb(126, 126, 126);
    text-decoration: line-through;
}
.zhekou{
    margin-left: 10px;
    color: red;
}
.book-title{
    width: 100%;
    height: 30px;
    margin-bottom: 20px;
}
.book-ziying{
    width: 45px;
    height: 25px;
}
.book-name{
    display: inline-block;
    font-weight: bold;
}
.book-introduce{
    font-size: 14px;
    color: rgb(160, 160, 160);
}
.coupon{
    width: 340px;
    margin: 0 auto;
    margin-top: 15px;
    border-bottom: 1px solid rgb(194, 194, 194);
}
.coupon-title{
    position: absolute;
    font-weight: bold;
}
.coupon-container{
    display: inline-block;
    width: 300px;
    margin-left: 40px;
}
.coupon-item{
    height: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.front-coupon{
    font-size: 10px;
    background: rgb(255, 195, 195);
    line-height: 20px;
    color: red;
}
.last-coupon{
    margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.activity{
    width: 340px;
    margin: 0 auto;
    margin-top: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(194, 194, 194);
}
.activity-name{
    font-weight: bold;
}
.highmoney{
    margin-left: 8px;
    line-height: 18px;
    font-size: 10px;
    border: 1px solid rgb(88, 86, 206);
    color: rgb(88, 86, 206);
    border-radius: 3px;
}
.hope{
    margin-left: 5px;
    font-size: 14px; 
}
.author{
    width: 340px;
    margin: 0 auto;
    margin-top: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(194, 194, 194);
}
.author-show{
    font-weight: bold;
}
.author-name{
    margin-left: 10px;
}
.publish{
    width: 340px;
    margin: 0 auto;
    margin-top: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(194, 194, 194);
}
.publish-show{
    font-weight: bold;
}
.publish-name{
     margin-left: 10px;
}
.fixed{
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 60px;
    background: white;
    z-index: 10;
}
.gotocart{
    display: inline-block;
    margin-left: 26%;
}
.book-cart{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-top: 5px;
}
.joinincart{
    display: inline-block;
    margin-left: 5px;
    width: 30%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    background: red;
    font-weight: bold;
    color: white;
    border: 1px solid rgb(255, 0, 0);
}
.buyitnow{
    display: inline-block;
    width: 30%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    background: orange;
    font-weight: bold;
    color: white;
    border: 1px solid orange;
}
</style>