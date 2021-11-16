<template>
    <div class="home">
        <!-- 搜索 -->
        <van-sticky :offset-top="0">
            <van-search v-model="search" shape="round" placeholder="请输入搜索关键词" />
        </van-sticky>
        <div class="scroll">
            <!-- 轮播图组件 -->
        <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in imgUrls" :key="index">
                <img :src="item" />
            </van-swipe-item>
        </van-swipe>
        <!-- 分类导航 -->
        <div class="nav">
            <div class="nav_item" v-for="item in homeNavList" :key="item.id">
                <img :src="JSON.parse(item.image)[0].url" />
                <p>{{ item.name }}</p>
            </div>
        </div>
        <!-- 加入会员 -->
        <add-vip></add-vip>
        <!-- 疯狂抢购 -->
        <div class="rob_purchase">
            <div class="count_down">
                <div class="icon_border"></div>
                <h4>今日疯抢</h4>
                <span class="bark_time">
                    <span class="item">{{hours}}</span>
                    <span class="icon">:</span>
                    <span class="item">{{minutes}}</span>
                    <span class="icon">:</span>
                    <span class="item">{{seconds}}</span>
                </span>
            </div>
            <div class="goods">
                <div class="goods_item" v-for="item in insaneList" :key="item.id">
                    <img :src="JSON.parse(item.propaganda)[0].url" />
                    <p>{{ item.name }}</p>
                    <div class="price">
                        <span>￥:{{ item.price }}</span>
                        <div @click.stop>
                            <!--取消冒泡事件-->
                            <icon-cart :goodsItem="item"></icon-cart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 猜你喜欢 -->
        <div class="guess_like">
            <div class="title">
                <div class="icon_border"></div>
                <h4>猜你喜欢</h4>
            </div>
            <div class="goods">
                <div
                    class="goods_item"
                    v-for="item in guessLiveList"
                    :key="item.id"
                    @click="goDetail(item.id)"
                >
                    <img :src="JSON.parse(item.propaganda)[0].url" />
                    <p>{{ item.name }}</p>
                    <div class="tools">
                        <div class="price">￥：{{ item.price }}</div>
                        <div @click.stop>
                            <icon-cart :goodsItem="item"></icon-cart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </div>
</template>
<script>
import {
    getHomeSwiper,
    getHomeNav,
    getHomeInsane,
    getHomeLive
} from "../../network/home.js";
import IconCart from "../../components/content/IconCart.vue"; // 添加到购物车小图标
import AddVip from "../../components/content/AddVip.vue"; // 加入会员
export default {
    name: "Home",
    data() {
        return {
            imgUrls: [], // 轮播图数据
            homeNavList: [], // 导航栏数据
            search: "", // 搜索关键字
            insaneList: [], // 疯狂抢购
            queryLive: {
                // 猜你喜欢请求参数
                current: 0, // 页码
                pageSize: 21 // 每页条数
            },
            totalNum: 21, // 总共的商品数据
            guessLiveList: [], // 猜你喜欢数据列表
            hours: "", // 时
            minutes: "", // 分
            seconds: "" // 秒
        };
    },
    created() {
        this.BakeTiem();
        // 获取轮播图数据
        getHomeSwiper().then(res => {
            // console.log(res);
            // 遍历取出图片数组
            this.imgUrls = res.data.swipers.map(item => {
                return JSON.parse(item.carousel)[0].url;
            });
            // console.log(this.imgUrls);
        });

        // 获取分类导航数据
        getHomeNav().then(res => {
            // console.log(res)
            this.homeNavList = res.data;
        });

        // 获取疯狂抢购数据
        getHomeInsane().then(res => {
            this.insaneList.push(...res.data);
            console.log(res.data);
        });

        // 猜你喜欢
        this.getHomeLiveGoods();

        // 判断是否是移动端
        this.isDeviceMobile();

    },
    mounted(){
        // 监听页面滑动
        document.addEventListener('scroll', this.scrollMoreData, false)
        // console.log(document.querySelector(".goods_list_wrap").offsetHeight)
    },
    methods: {
        tow(n) {
            return n >= 0 && n < 10 ? "0" + n : "" + n;
        },

        // 倒计时
        BakeTiem() {
            console.log(new Date());
            // let time = setInterval(() => {
            //     let date = new Date();
            // console.log(date);
            // this.hours = date.getHours().toString().padStart(2,'0');
            // this.minutes = date.getMinutes().toString().padStart(2,'0');
            // this.seconds = date.getSeconds().toString().padStart(2,'0');
            // console.log(date.getHours());
            // console.log(date.getMinutes());
            // console.log(date.getSeconds());
            // }, 1000);

            // 倒计时：
            let time = setInterval(() => {
                var oDate = new Date(); //获取日期对象

                var oldTime = oDate.getTime(); //现在距离1970年的毫秒数

                var newDate = new Date("2021/8/1 00:00:00");

                var newTime = newDate.getTime(); //2019年距离1970年的毫秒数

                var second = Math.floor((newTime - oldTime) / 1000); //未来时间距离现在的秒数

                var day = Math.floor(second / 86400); //整数部分代表的是天；一天有24*60*60=86400秒 ；

                second = second % 86400; //余数代表剩下的秒数；

                var hour = Math.floor(second / 3600); //整数部分代表小时；

                second %= 3600; //余数代表 剩下的秒数；

                var minute = Math.floor(second / 60);

                second %= 60;
                this.hours = this.tow(hour);
                this.minutes = this.tow(minute);
                this.seconds = this.tow(second);
            }, 1000);
        },
        getHomeLiveGoods(){
            this.queryLive.current ++;
            getHomeLive(this.queryLive).then(res => {
            console.log(res);
            this.guessLiveList.push(...res.data);
          });
        },
        // 跳转到详情页
        goDetail(id) {
            this.$router.push({
                path: "/detail",
                query: {
                    id
                }
            });
        },
        isDeviceMobile() {
            // 判断是否是移动端
            const ua = navigator.userAgent.toLowerCase();
            let isTrue = /android|webos|iphone|ipod|balckberry/i.test(ua);
            if (!isTrue && !sessionStorage.getItem("isOne")) {
                // 只有在页面首次加载的时候 才判断是否在手机上显示
                // 如果不是移动端，是 pc 端的情况下
                this.$dialog.alert({
                    title: "温馨提示",
                    message: "请到手机上浏览效果更佳！"
                });
                sessionStorage.setItem("isOne", true);
            }
        },
          scrollMoreData() {
            // 计算 总页数
            // this.pageTotal = Math.ceil(this.total / this.goodsParams.pagesize);
        //     const scrollTopHeight = document.documentElement.scrollTop;         //  获取 文档向上滚动的 距离;
        //     const clientHeight = document.documentElement.clientHeight;         // 获取浏览器窗口的 高度;
        //     const offsetHeight = document.querySelector(".scroll").offsetHeight;   // 获取滚动 内容的 高度;
        //      if ((scrollTopHeight + clientHeight) + 100 + 60 >= offsetHeight) {
        //          // -54 是因为顶部的 搜索框占了 54px;  
                
        //         // this.getHomeLiveGoods();
        //         console.log('触底了'); 
        //   }
                // console.log(scrollTopHeight)    //4736    4736 + 812 = 5548 - 5452 = 底部  -  上部分 = 50 - 46 = 4 
                // console.log(clientHeight)       // 812
                // console.log(offsetHeight)       //5452
      },
    },
    components: {
        IconCart,
        AddVip
    }
};
</script>
<style lang="less">
.van-swipe-item {
    width: 100%;
    height: 4.72rem;
    img {
        width: 100%;
        height: 100%;
    }
}
.van-swipe__indicator {
    width: 8px;
    height: 8px;
    background-color: gray;
}
.van-swipe__indicator--active {
    width: 12px;
    height: 6px;
    border-radius: 3px;
}
.nav {
    display: flex;
    flex-wrap: wrap; // 换行
    justify-content: space-around;
    .nav_item {
        display: flex;
        flex-direction: column; //  改变主轴方向，使它为上下排列
        justify-content: space-between;
        align-items: center;
        padding: 0.2rem 0;
        width: 1.28rem;
        height: 1.82rem;
        font-size: 0.24rem;
        img {
            width: 1rem;
            height: 1rem;
            border-radius: 100%;
        }
    }
}
.rob_purchase {
    .count_down {
        display: flex;
        padding: 0.2rem 0;
        // height: 0.5rem;
        h4 {
            font-size: 0.36rem;
        }
        .bark_time {
            display: flex;
            justify-content: space-between;
            width: 2.2rem;
            // margin-left: 1rem;
            height: 0.5rem;
            margin-left: 0.3rem;
            color: #fd6069;
            .item {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 0.5rem;
                height: 0.5rem;
                background-color: #fd6069;
                color: #ffffff;
                font-size: 0.3rem;
                font-weight: bold;
            }
            .icon {
                font-size: 0.3rem;
            }
        }
    }
    .goods::-webkit-scrollbar {
        display: none;
    } // 隐藏横向滚动条
    .goods {
        display: flex;
        overflow-x: scroll; /*添加横向滚动条*/
        // white-space: nowrap;/*不换行*/
        height: 4rem;
        border-bottom: 6px solid #f8f4f5;
        .goods_item {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            // justify-content: center;
            width: 2.1rem;
            height: 100%;
            padding: 0.1rem;
            font-size: 0.24rem;
            // border: 1px solid red;
            img {
                width: 1.8rem;
                height: 2rem;
            }
            p {
                text-align: center;
                margin: 0.2rem 0;
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
            .price {
                position: absolute;
                bottom: 0.1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 1.8rem;
                margin-left: 0.15rem;
                span {
                    font-size: 0.26rem;
                    color: #fd6069;
                }
            }
        }
    }
}
.guess_like {
    .title {
        display: flex;
        align-items: center;
        height: 1rem;
        width: 100%;
        // border: 1px solid #000000;
        h4 {
            font-size: 0.36rem;
        }
    }
    .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .goods_item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 3.45rem;
            height: 6rem;
            border: 1px solid #f1f1f1;
            border-radius: 3px;
            margin-bottom: 10px;
            font-size: 0.28rem;
            &:last-child {
                // position: absolute;
                // left: 10px;
                justify-self: flex-start;
                // background-color: red;
            }
            img {
                margin-top: 0.4rem;
                width: 80%;
                height: 2.6rem;
            }
            p {
                display: flex;
                align-items: center;
                height: 2rem;
                padding-left: 0.3rem;
                align-self: flex-start;
            }
            .tools {
                display: flex;
                justify-content: space-between;
                width: 2.8rem;
                margin-left: 0.3rem;
                align-self: flex-start;
                color: red;
            }
        }
    }
}
.icon_border {
    width: 6px;
    height: 20px;
    background-color: #3ecd60;
    border-radius: 5px;
    margin: 0 0.16rem;
}

body::-webkit-scrollbar {
    display: none;
}
</style>