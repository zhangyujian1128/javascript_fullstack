<template>
    <div class="detail" v-if="this.detailData.name">
        <van-sticky :offset-top="0">
            <van-nav-bar
            title="商品详情"
            left-arrow
            @click-left="onClickLeft"
        />
        </van-sticky>
        <div class="goods_info">
            <img :src="JSON.parse(this.detailData.carousel)[0].url"/>
            <div class="info">
                <h4>{{ this.detailData.name }}</h4>
                <p class="bewrite">{{ this.detailData.bewrite }}</p>
                <p class="price">￥：{{ this.detailData.price }}</p>
                <div class="time">
                    <div class="round"></div>
                    <div>最快29分钟送达</div>
                </div>
            </div>
        </div>
        <!-- 加入会员 -->
        <add-vip></add-vip>
        <!-- 评论 -->
        <div class="remark">
            <h4>评论</h4>
            <div class="user_name">
                <van-icon name="wap-home" color="#48C568" size="20"/>
                <div class="satisfied">
                    <P class="text">用户名</P>
                    <div class="star">
                        <van-icon name="star" color="#AAAAAA" size="15"/>
                        <van-icon name="star" color="#AAAAAA" size="15"/>
                        <van-icon name="star" color="#AAAAAA" size="15"/>
                        <van-icon name="star" color="#AAAAAA" size="15"/>
                        <van-icon name="star" color="#AAAAAA" size="15"/>
                        <span class=" text good">很满意</span>
                    </div>
                    <p class="text">很满意</p>
                </div>
                <div class="time text">{{create_time}}</div>
            </div>
            <!--更多-->
            <div class="look_more">查看更多&nbsp;&nbsp;&nbsp;&nbsp;(660)</div>
        </div>
        <!-- 规格 -->
        <div class="norms">
            <h4>规格</h4>
            <div class="item">
                <div>
                    <p>净含量</p>
                    <p>{{detailData.weight}}</p>
                </div>
            </div>
            <div class="item">
                <div>
                    <p>保存条件</p>
                    <p>{{detailData.conditions}}</p>
                </div>
            </div>
            <div class="item">
                <div>
                    <p>保质期</p>
                    <p>{{detailData.shelf_life}}</p>
                </div>
            </div>
        </div>
        <!--图片-->
        <div class="bottom_img">
            <img :src="JSON.parse(detailData.carousel)[0].url" alt="">
        </div>
        <!-- 底线 -->
        <div class="bottom_line">我也是有底线的人~</div>
        <!-- 底部工具栏 -->
        <van-goods-action>
            <van-goods-action-icon v-if="this.isStar" icon="star-o" text="收藏" @click="onClickIcon" />
            <van-goods-action-icon v-if="!this.isStar" icon="star" color="#EE0A24" text="收藏" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart" />
            <van-goods-action-button type="warning" text="加入购物车" @click="addCard()" />
            <van-goods-action-button type="danger" text="立即购买" @click="goPay()" />
        </van-goods-action>
    </div>
</template>
<script>
import {getDetail} from '../../network/detail.js'
import AddVip from '../../components/content/AddVip.vue'  // 加入会员
import {dateFormat} from '../../common/dateFormat.js' // 格式化日期
export default {
    name:'Detail',
    data() {
        return{
            id:'',  //请求参数
            detailData:[],  // 详情页数据列表
            create_time:'',   // 格式化后的日期
            isStar:true,    // 收藏
            goodsItem:{}    // 定义一个添加到购物车数组的空对象
        }
    },
    created() {
        // 获取路由跳转传过来的id
        this.id = this.$route.query.id;
        console.log(this.id)

        // 发起请求 获取详情页数据
        getDetail(this.id).then(res=>{
            this.detailData = res.data;
            console.log(res.data)
            this.goodsItem.id = this.id;
            this.goodsItem.name = res.data.name;
            this.goodsItem.price = res.data.price;
            this.goodsItem.propaganda = res.data.propaganda;
        // 格式化日期
        // let time = this.detailData.create_time
        let date = new Date();
        this.create_time = dateFormat('yy-MM-dd hh:mm:ss',date)
        // console.log(a)
        // this.date = date;
        });

    },
    methods:{
        // 返回
        onClickLeft() {
            this.$router.go(-1);
        },
        // 客服
        onClickIcon() {},
        // 购物车
        goCart(){
            this.$router.push({
                path:'/index/cart'
            });
        },
        // 商品添加到购物车
        addCard(){
            console.log(this.goodsItem,"aaa")
            this.$toast({
                message:'添加成功！',
                icon:'success',
                duration:1000
            });
            // console.log(this.goodsItem.id);
            let index = this.$store.state.cartList.findIndex(item => {       // 有就返回找到的那个元素对象 没有返回 undefined 
                return item.id == this.goodsItem.id;                        // findIndex 有返回索引位置  没有返回 -1
            });
            if(index==-1){
                // 当购物车数组中不存在时
                this.$set(this.goodsItem,'num',1);
                this.$set(this.goodsItem,'isCheck',false);
                this.$store.state.cartList.push(this.goodsItem);
            }else{
                // 当购物车数组中已经存在时
                this.$store.state.cartList[index].num ++;
            }
            console.log(this.$store.state.cartList);
        },
        // 立即支付
        goPay() {
            let index = this.$store.state.cartList.findIndex(item => {       // 有就返回找到的那个元素对象 没有返回 undefined 
                return item.id == this.goodsItem.id;                        // findIndex 有返回索引位置  没有返回 -1
            });
            console.log(this.goodsItem.id)
            console.log(index)
            if(index==-1){
                // 当购物车数组中不存在时
                this.$set(this.goodsItem,'num',1);
                this.$set(this.goodsItem,'isCheck',false);
                this.$store.state.cartList.push(this.goodsItem);
            }else{
                // 当购物车数组中已经存在时   
                this.$store.state.cartList[index].num ++;
            }
            console.log(this.$store.state.cartList)
            this.$router.push({
                path:'/index/cart'
            });
        },
        // 收藏
        onClickIcon(){
            this.isStar = !this.isStar;
            if(!this.isStar){
                this.$toast({
                    message:'商品收藏成功！',
                    duration:1000
                })
            }else{
                this.$toast({
                    message:'商品已取消收藏！',
                    duration:1000
                })
            }
        }
    },
    components:{
        AddVip
    }
}
</script>
<style lang="less" scoped>
    .detail{
        .goods_info{
            width: 100%;
            img{
                width: 100%;
                height: 7.5rem;
            }
            .info{
                padding-left: 0.3rem;
                h4{
                    font-size: 0.3rem;
                }
                .bewrite{
                    font-size: 0.26rem;
                    color: #878787;
                    margin-top: 0.08rem;
                }
                .price{
                    font-size: 0.3rem;
                    color: red;
                    font-weight: bold;
                    line-height: 0.8rem;
                }
                .time{
                    display: flex;
                    align-items: center;
                    font-size: 0.24rem;
                    width: 100%;
                    height: 0.8rem;
                    border-top: 1px solid #F5F5F5;
                    .round{
                        width: 0.24rem;
                        height: 0.24rem;
                        border-radius: 100%;
                        background-color: #CBCBCB;
                        margin-right: 0.12rem;
                    }
                }
            }
        }
        .remark{
            padding: 0 0 0.2rem 0.3rem;
            h4{
              margin-top: 0.3rem;
              font-size: 0.3rem;
            }
            .user_name{
                margin-top: 0.2rem;
                display: flex;
                // justify-content: space-between;
            .text{
                font-size: 0.28rem;
            }
            .satisfied{
                margin-left: 0.2rem;
                // justify-self: flex-start;
                .star{
                    display: flex;
                    align-items: center;
                    height: 0.5rem;
                    .good{
                        margin-left: 0.2rem;
                    }
                }
              }
              .time{
                  position: absolute;
                  right:0.3rem;
                  font-size: 0.24rem;
              }
            }
            // 查看更多
            .look_more{
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                width: 2.6rem;
                height: 0.66rem;
                color: #727272;
                border-radius: 20px;
                font-size: 0.24rem;
                border: 1px solid #E8E8E8;
            }
        }
        // 规格
        .norms{
            border-top: 0.2rem solid #F8F4F5;
            border-bottom: 0.2rem solid #F8F4F5;
            h4{
                display: flex;
                align-items: center;
                font-size: 0.3rem;
                margin-left: 0.2rem;
                height: 0.8rem;
                border-bottom: 1px solid #F1F1F1;
            }
            .item{
                width: 100%;
                height: 0.8rem;
                border-bottom: 1px solid #F1F1F1;
                font-size: 0.26rem;
                div{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                    width: 45%;
                    p{
                        margin-left: 0.2rem;
                    }
                }
            }
        }
        // 底部参考图
        .bottom_img{
             width: 100%;
             height: 7.5rem;
            //  border: 2px solid red;
             img{
                 width: 100%;
                 height: 100%;
             }
         }
        //  底线
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
</style>