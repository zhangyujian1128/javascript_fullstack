<template>
    <div class="profile">
        <div class="hear" @click="myCenter()">
            <div class="content">
                <div class="img">
                    <img src="../../assets/touxiang.jpg"/>
                </div>
                <div class="userInfo">
                    <div>会员号：123666</div>
                    <div>手机号：{{ tel }}</div>
                </div>
                <van-icon class="user_info_icon" name="arrow" size="0.46rem"/>
            </div>
        </div>
        <div class="activity">
            <div class="item">
                <div class="num">0</div>
                <div class="name">优惠劵</div>
            </div>
            <div class="item">
                <div class="num">12</div>
                <div class="name">积分</div>
            </div>
            <div class="item">
                <div class="num">999.80</div>
                <div class="name">余额(元)</div>
            </div>
        </div>
        <!-- 我的订单 -->
        <div class="order">
            <div class="my_order">
                <div class="left">
                    <van-icon name="records" color="#FFD944" size="0.46rem"/>
                    <div class="my">我的订单</div>
                </div>
                <div class="right" @click="myOrderAll(0)">
                    <div class="order_all">查看全部订单</div>
                    <van-icon name="arrow" color="#C6C6C6"/>
                </div>
            </div>
            <div class="order_tab">
                <div class="item" @click="myOrderAll(1)">
                    <van-icon name="cash-on-deliver" size="0.58rem" color="#878787"/>
                    <div class="item_title">待支付</div>
                </div>
                <div class="item" @click="myOrderAll(2)">
                    <van-icon name="paid" size="0.58rem" color="#878787"/>
                    <div class="item_title">待发货</div>
                </div>
                <div class="item" @click="myOrderAll(3)">
                    <van-icon name="debit-pay" size="0.58rem" color="#878787"/>
                    <div class="item_title">待收货</div>
                </div>
                <div class="item" @click="myOrderAll(4)">
                    <van-icon name="comment-o" size="0.58rem" color="#878787"/>
                    <div class="item_title">待评价</div>
                </div>
                <div class="item">
                    <van-icon name="refund-o" size="0.58rem" color="#878787"/>
                    <div class="item_title">退款</div>
                </div>
            </div>
        </div>
        <div class="card margin_top">
            <my-card-add class="card_item" @click.native="goVideo()">
                <div slot="left" class="left">
                    <van-icon name="friends" color="#FFD944" size="0.42rem" />
                    <div class="card_title">代码人生</div>
                </div>
                <van-icon slot="right" name="arrow" size="0.42rem" color="#C7C7C7"/>
            </my-card-add>
            <my-card-add class="card_item"  @event="goAddress">
                <div slot="left" class="left">
                    <van-icon name="label-o" color="#76D348" size="0.42rem"/>
                    <div class="card_title">收货地址</div>
                </div>
                <van-icon slot="right" name="arrow" size="0.42rem" color="#C7C7C7"/>
            </my-card-add>
        </div>
        <div class="card">
            <my-card-add class="card_item"  @click.native="toast()">
                <div slot="left" class="left">
                    <van-icon name="vip-card-o" color="#76D348" size="0.42rem" />
                    <div class="card_title">我的绿卡</div>
                </div>
                <van-icon slot="right" name="arrow" size="0.42rem" color="#C7C7C7"/>
            </my-card-add>
        </div>
        <div class="card">
            <my-card-add class="card_item" @click.native ="contactNmber()">
                <div slot="left" class="left">
                    <van-icon name="phone-o" color="#76D348" size="0.42rem" />
                    <div class="card_title">联系电话</div>
                </div>
                <van-icon slot="right" name="arrow" size="0.42rem" color="#C7C7C7"/>
            </my-card-add>
            <my-card-add class="card_item" @click.native="toast()">
                <div slot="left" class="left">
                    <van-icon name="chat-o" color="#FFD944" size="0.42rem" />
                    <div class="card_title">意见反馈</div>
                </div>
                <van-icon slot="right" name="arrow" size="0.42rem" color="#C7C7C7"/>
            </my-card-add>
        </div>
        <div class="card" @click="aboutWe()">
            <my-card-add class="card_item">
                <div slot="left" class="left">
                    <van-icon name="warning" color="#76D348" size="0.42rem" />
                    <div class="card_title">关于</div>
                </div>
                <van-icon slot="right" name="arrow" size="0.42rem" color="#C7C7C7"/>
            </my-card-add>
        </div>
        <div class="edition">当前版本：1.0.0</div>
    </div>
</template>

<script>
import myCardAdd from '../../components/content/myCardAdd.vue'
export default {
    name:'Profile',
    data(){
        return{
            tel:''
        }
    },
    created(){
        this.getTel();
    },
    methods:{
        goVideo(){
            this.$router.push({
                path:'/video'
            });
        },
        getTel(){
            this.tel = sessionStorage.getItem('tel');
        },
        // 联系电话
        contactNmber() {
            console.log("a");
            this.$dialog.confirm({
                title:'叮咚提示',
                confirmButtonText:'去GitHub',
                message:'本站提供源码以及接口，如有疑问，请联系作者，微信：664431710'
            }).then(() =>{
                window.location.href = 'https://github.com/sirfuao';    // 当桉确认的时候执行这个个语句 跳转到 github
            }).catch(()=>{
                console.log("取消");
            });
        },
        // 关于我们
        aboutWe(){
            this.$router.push({
                path:'/about'
            });
        },
        // 个人中心
        myCenter(){
            this.$router.push({
                path:'/myCenter'
            });
        },
        // 订单信息
        myOrderAll(index){
            this.$router.push({
                path:'/orderDetail',
                query:{
                    index:index
                }
            });
            console.log(index)
        },
        // 收货地址
        goAddress(){
            console.log("aaa")
            this.$router.push({
                path:'/addAddress'
            });
            console.log("a");
        },
        toast() {
            this.$toast({
                message:'此功能暂未开启！',
                duration:1500
            })
        }
    },
    
    components:{
        myCardAdd
    }
}
</script>

<style lang="less" scoped>
    .profile{
        width: 100%;
        height: 100%;
        background-color: #F1F1F1;
        .hear{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 2rem;
            background-color: #3BBA63;
            .content{
                display:flex;
                align-items: center;
                width: 90%;
                height: 1.2rem;
                font-size: 0.28rem;
                color: #ffffff;
                .img{
                    width: 1.2rem;
                    height: 1.2rem;
                    border-radius: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 100%;
                    }
                }
                .userInfo{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    height: 1.2rem;
                    margin-left: 0.3rem;
                }
                .user_info_icon{
                    margin-left: 1.66rem;
                }
            }
        }
        .activity{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 1.5rem;
            background-color: #ffffff;
            font-size: 0.32rem;
            .item{
                height: 60%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                .num{
                    font-size: 0.28rem;
                    font-weight: bold;
                }
            }
        }
        // 我的订单
        .order{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 100%;
            background-color: #ffffff;
            margin-top: 0.3rem;
            .my_order{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 90%;
                height: 0.8rem;
                font-size: 0.32rem;
                border-bottom: 1px solid #F2F2F2;
                .left,.right{
                    display: flex;
                    align-items: center;
                }
                .order_all{
                    font-size: 0.26rem;
                    color: #909090;
                    margin-right: 0.1rem;
                }
                .my{
                    margin-left: 0.1rem;
                }
            }
            .order_tab{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 90%;
                height: 1.6rem;
                font-size: 0.28rem;
                .item{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    height: 1.12rem;
                }
            }
        }
        .card{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 0.3rem;
            width: 100%;
            background-color: #ffffff;
        }
        .margin_top{
            margin-top: 0.15rem;
        }
        .card_item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            height: 1rem;
            font-size: 0.32rem;
            background-color: #ffffff;
            border-top: 1px solid #f1f1f1;
            .left{
                display: flex;
                justify-content: space-between;
                width: 2rem;
                .card_title{
                    color: #889AA4;
                }
            }
        }
        .edition{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 1rem;
            background-color: #f1f1f1;
            font-size: 0.28rem;
            color: #999999;
        }
    }
</style>