<template>
    <div class="order_detail">
        <tab-cart title="叮咚买菜"></tab-cart>
        <van-tabs v-model="active" swipeable animated>
            <van-tab title="全部">
                <div class="order_item"></div>
                <div class="empty">
                    <img src="../../assets/empty1.jpeg"/>
                    <div class="text">暂时还没有相关订单!</div>
                </div>
            </van-tab>
            <van-tab title="待支付">
                <div class="order_item"></div>
                <div class="empty">
                    <img src="../../assets/empty1.jpeg"/>
                    <div class="text">暂时还没有相关订单!</div>
                </div>
            </van-tab>
            <van-tab title="待发货">
                <div class="order_item"></div>
                <div class="empty">
                    <img src="../../assets/empty1.jpeg"/>
                    <div class="text">暂时还没有相关订单!</div>
                </div>
            </van-tab>
            <van-tab title="待收货">
                <div class="order_item"></div>
                <div class="empty">
                    <img src="../../assets/empty1.jpeg"/>
                    <div class="text">暂时还没有相关订单!</div>
                </div>
            </van-tab>
            <van-tab title="待评价">
                <div class="order_item"></div>
                <div class="empty">
                    <img src="../../assets/empty1.jpeg"/>
                    <div class="text">暂时还没有相关订单!</div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import TabCart from '../../components/content/TabCart'
export default {
    data() {
        return {
            active:0,
        };
    },
    created(){
        this.active = this.$route.query.index;
    },
    components:{
        TabCart
    }
};
</script>
<style lang="less" scoped>
    .order_detail{
        width: 100%;
        height: 100vh;
        background-color: #f5f5f5;
        .empty{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
            img{
                width: 70vw;
                height: 60vw;
            }
            .text{
                font-size: 0.28rem;
                color: #A3A3A3;
            }
        }
    }
</style>