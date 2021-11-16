<template>
    <div class="category">
        <!-- <icon-cart></icon-cart> -->
        <!-- 搜索 -->
        <van-sticky :offset-top="0">
            <van-search v-model="search" shape="round" placeholder="请输入搜索关键词" />
        </van-sticky>
        <div class="goods">
        <!-- 左侧商品 类别 列表 -->
            <div class="title">
                <div :class="['title_item',{'active':item.id==id}]" v-for="item in classList" :key="item.id" @click="titleChange(item.id,item.name)">{{item.name}}</div>
            </div>
            <div class="content">
                <!-- 商品标题栏 -->
                <h4>{{ title }}</h4>
                <div class="goods_item" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
                    <div class="img">
                        <img :src="JSON.parse(item.propaganda)[0].url"/>
                    </div>
                    <div class="goods_info">
                        <div class="goods_title">
                            <p class="name">{{ item.name }}</p>
                            <p class="bewrite">{{ item.bewrite }}</p>
                        </div>
                        <div class="price">
                            <div>￥：{{ item.price }}</div>
                            <icon-cart></icon-cart>
                        </div>
                    </div>
                </div>
                <!-- 底线 -->
                <div class="bottom_line">我也是有底线的人~</div>
            </div>
        </div>
    </div>
</template>
<script>
import {getAllClass,getOneAllGoods} from '../../network/category.js'
import IconCart from '../../components/content/IconCart.vue'
// import  IconCart from '../../components/content/IconCart.vue'
export default {
    name:'Category',
    data() {
        return{
            search:'',
            classList:[],
            id:13,  // 默认请求id
            indexCount:0, // 商品标题的默认选中
            title:'',   // 商品标题栏
            goodsList:[]  // 商品数据
        }
    },
    created() {
        // 获取左侧商品标题列表
        getAllClass().then(res =>{
            console.log(res);
            this.classList = res.data.class;
            this.title = res.data.class[0].name;
        });
       this.getOneAllGoods();
    },
    methods:{
        // 根据标题id获取右侧商品内容
        getOneAllGoods() {
             getOneAllGoods(this.id).then(res =>{
             console.log(res);
             this.goodsList = res.data;
        });
        },
        // 点击左侧商品标题，切换右侧商品内容
        titleChange(title_id,item_title){
            // console.log(title_id)
            this.id = title_id
            console.log(this.id)
            this.title = item_title
            // 然后重新获取右侧内容
            this.getOneAllGoods();
        },
        // 跳转到详情页
        goDetail(id) {
            this.$router.push({
                path:'/detail',
                query:{
                    id
                }
            });
        } 
    },
    components:{
        IconCart
    }
}
</script>
<style lang="less" scoped>
    .goods{
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        padding-top: 54px;
        .title::-webkit-scrollbar {     // 隐藏纵向滚动条
        display:none
        }
        .title{
            float: left;
            overflow: auto;
            width: 30%;
            height:100%;
            font-size: 0.32rem;
            background-color: #F7F7F7;
            .title_item{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 1.2rem;
                border-bottom: 1px solid #f3f3f3;
            }
            .active{
                background-color: #ffffff;
                font-weight: bold;
            }
        }
        .content{
            float: left;
            overflow: auto;
            width: 70%;
            height: 100%;
            padding-left: 0.25rem;
            padding-bottom: 60px;
            // 标题
            h4{
                display: flex;
                align-items: center;
                height: 0.8rem;
                font-size: 0.3rem;
                border-bottom: 1.5px solid #F7F7F7;
            }
            .goods_item{
                display: flex;
                align-items: center;
                height: 2.7rem;
                border-bottom: 1.5px solid #F6F6F6;
                font-size: 0.3rem;
                .img{
                    display: flex;
                    align-items: center;
                    width: 1.8rem;
                    height: 1.8rem;
                    // border: 1px solid red;
                    img{
                        width: 1.8rem;
                        height: 1.8rem;
                    }
                }
                .goods_info{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    height: 2.5rem;
                    width: 3rem;
                    // border: 1px solid red;
                    .goods_title{
                        p{
                            display: -webkit-box;
                            overflow: hidden;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;  
                        }
                        .name{
                            font-weight: bold;
                        }
                        .bewrite{
                            color: #A0A0A0;
                        }
                    }
                }
                .price{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: red;
                    font-weight: bold;
                    // border: 1px solid #000;
                }
            }
            // 底线
            .bottom_line{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 1rem;
            background-color: #F8F4F5;
            color: #999999;
            font-size: 0.3rem;
          }
        }
       .content::-webkit-scrollbar{
            display: none;
        }
    }
</style>