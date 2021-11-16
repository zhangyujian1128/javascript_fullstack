<template>
    <div class="cart">
        <!-- 标题 -->
        <tab-cart class="tab">
            <div slot="center">购物车</div>
        </tab-cart>
        <!-- 当购物车为空时 -->
        <div class="empty" v-if="JSON.parse(JSON.stringify(this.$store.state.cartList)).length==0">
            <div class="img">
                <img src="../../assets/cart.png" />
            </div>
            <div class="go_shop_btn" @click="goShopBtn()">去逛逛</div>
        </div>
        <!-- 当购物车数组不为空时 -->
        <div
            class="cart_list"
            v-if="JSON.parse(JSON.stringify(this.$store.state.cartList)).length>0"
        >
            <div class="cart_list_item" v-for="item in this.$store.state.cartList" :key="item.id">
                <van-checkbox v-model="item.isCheck" checked-color="#07c160"></van-checkbox>
                <div class="goods_info">
                    <div class="img">
                        <img :src="JSON.parse(item.propaganda)[0].url" />
                    </div>
                    <div class="info">
                        <div class="top">{{ item.name }}</div>
                        <div class="buttom">
                            <div class="price">￥：{{ item.price }}</div>
                            <div class="numTools">
                                <div class="btn" @click="goodsHandle(item.id,-1)">-</div>
                                <div class="num">{{ item.num }}</div>
                                <div class="btn" @click="goodsHandle(item.id,1)">+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 猜你喜欢 -->
        <div class="title">
            <span>·</span>猜你喜欢
            <span>·</span>
        </div>
        <!-- 猜你喜欢的商品 -->
        <div class="goods_live">
            <div
                class="goods_live_item"
                v-for="item in goodsList"
                :key="item.id"
                @click="goDetail(item.id)"
            >
                <div class="img">
                    <img :src="JSON.parse(item.propaganda)[0].url" />
                </div>
                <div class="goods_title">{{ item.name }}</div>
                <div class="goods_price">
                    <div class="price">￥{{ item.price }}</div>
                    <icon-cart :goodsItem="item"></icon-cart>
                </div>
            </div>
        </div>
        <!-- 弹出框，支付 -->
        <van-dialog
            class="dialog"
            :showConfirmButton="false"
            :showCancelButton="false"
            v-model="isDialogPy"
            title="微信支付"
            show-cancel-button
        >
            <span class="cencel" @click="cencel()">X</span>
            <div class="input price">￥：12.66</div>
            <div class="mode input">
                <span>支付方式</span>
                <span class="balance">
                    余额
                    <van-icon name="arrow" />
                </span>
            </div>
            <div class="btn" @click="pyBtn()">确认支付</div>
        </van-dialog>
        <!-- 去结算 -->
        <div class="goods_tools">
            <van-checkbox v-model="isCheckAll" @click="changeCheckAll()" checked-color="#07c160"></van-checkbox>
            <div class="price">
                <div class="goods_price">￥：{{ goodsPriceAll.toFixed(2) }}</div>
                <van-button class="goods_btn" type="danger" @click="pyGoods()">去结算</van-button>
            </div>
        </div>
    </div>
</template>
<script>
import TabCart from "../../components/content/TabCart.vue";
import { getCartLike } from "../../network/cart.js";
import IconCart from "../../components/content/IconCart.vue"; // 购物车图标组件
export default {
    data() {
        return {
            goodsList: [], //猜你喜欢数据列表
            pagenull: {
                current: 1, // 显示第一个
                pageSize: 10 // 规定每页显示10条数据
            },
            // isCheckAll:false,   // 是否全选
            isDialogPy: false // 支付 弹出框
        };
    },
    created() {
        console.log(this.$store.state.cartList, "aaa");
        // 猜你喜欢
        getCartLike(this.pagenull).then(res => {
            console.log(res);
            this.goodsList = res.data;
        });
    },
    // 计算属性一般就是用来通过其他的数据算出一个新数据，而且它有一个好处就是，它把新的数据缓存下来了，
    // 当其他的依赖数据没有发生改变，它调用的是缓存的数据，这就极大的提高了我们程序的性能。而如果写在methods里，
    // 数据根本没有缓存的概念，所以每次都会重新计算。这也是为什么这里我们没用methods的原因。
    computed: {
        // 计算商品的总价格
        goodsPriceAll() {
            let total = 0; // 必须要给一个初始值 ，不然就是
            this.$store.state.cartList.forEach(item => {
                console.log("a");
                console.log(item.isCheck);
                if (item.isCheck) {
                    total += item.price * item.num;
                }
            });
            return total;
        },
        isCheckAll: {
            // every JS数组的迭代方法，只有当数组中的每一项都返回true是，才返回 true;
            // 有一项不满足就返回 false;
            get: function() {
                let temp =
                    this.$store.state.cartList.length == 0
                        ? false
                        : this.$store.state.cartList.every(item => {
                              return item.isCheck;
                          });
                return temp;
            },
            set: function() {}
        }
    },
    methods: {
        // 去逛逛
        goShopBtn() {
            this.$router.push({
                path: "/login"
            });
        },
        // 支付
        pyBtn() {
            this.isDialogPy = false;
            this.$toast.loading({
                message: "支付中，请耐心等待...",
                forbidClick: true,
                overlay:true,
                duration: 3000
            });
            setTimeout(() => {
                this.$toast.success({
                    message: "支付成功",
                    duration: 1500
                });
            }, 3000);
        },
        // 去结算
        pyGoods() {
            if (this.goodsPriceAll == 0) {
                this.$toast({
                    message: "请选择商品！",
                    duration: 1500
                });
            } else {
                if (sessionStorage.getItem("token")) {
                    this.isDialogPy = true;
                } else {
                    this.$dialog
                        .confirm({
                            title: "友情提示:",
                            message: "经检测，您还没有登录，现在去登录~"
                        })
                        .then(() => {
                            // 当用户按下确认键的时候
                            this.$router.push({
                                path: "/login"
                            });
                        })
                        .catch(() => {
                            this.$router.go(-1);
                            // 取消登录
                        });
                }
            }
        },
        cencel() {
            this.isDialogPy = false;
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
        // 反选和全选
        changeCheckAll() {
            let isTrue = this.$store.state.cartList.every(item => {
                return item.isCheck;
            });
            if (isTrue) {
                // 如果全部是 true时 ，则点击全选的时候全部变成 false
                this.$store.state.cartList.forEach(item => {
                    item.isCheck = false;
                });
            } else {
                // 只要有一个 不为 true， 则点击全选的时候就全部变成 true;
                this.$store.state.cartList.forEach(item => {
                    item.isCheck = true;
                });
            }
        },
        goodsHandle(id, i) {
            let index = this.$store.state.cartList.findIndex(item => {
                return item.id == id;
            });
            console.log(index);
            if (this.$store.state.cartList[index].num == 1 && i == -1) {
                this.$store.state.cartList.splice(index, 1);
            } else {
                this.$store.state.cartList[index].num += i;
            }
        }
    },
    components: {
        TabCart,
        IconCart
    }
};
</script>
<style lang="less" scoped>
.cart {
    width: 100vw;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 1rem;
    background-color: #f1f1f1;
    .tab {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 0.8rem;
        font-size: 0.32rem;
        background-color: #ffffff;
        font-weight: bold;
    }
    .cart_list {
        margin-top: 0.2rem;
        .cart_list_item {
            box-sizing: border-box;
            display: flex;
            width: 100%;
            height: 2rem;
            background-color: #ffffff;
            font-size: 0.24rem;
            .van-checkbox {
                flex: 1;
                margin-left: 0.2rem;
            }
            .goods_info {
                flex: 9;
                display: flex;
                padding: 0.3rem 0.3rem 0.3rem 0px;
                border-bottom: 1px solid #f5f5f5;
                .img {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 1.4rem;
                    height: 1.4rem;
                    // border: 1px solid red;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .info {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 100%;
                    margin-left: 0.3rem;
                    .buttom {
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                        .price {
                            font-weight: bold;
                        }
                        .numTools {
                            // width: 100%;
                            display: flex;
                            font-size: 0.28rem;
                            color: #9b9b9b;
                            .num {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                width: 0.66rem;
                                margin: 0 0.2rem;
                                color: black;
                                // height: 0.5rem;
                                // border: 1px solid red;
                                background-color: #f9f9f9;
                            }
                            .btn {
                                font-size: 0.32rem;
                            }
                        }
                    }
                }
            }
        }
    }
    .empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0.2rem;
        width: 100%;
        height: 6rem;
        background-color: #f5f5f5;
        .img {
            width: 80%;
            height: 76%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .go_shop_btn {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 0.4rem;
            width: 3rem;
            height: 0.7rem;
            color: #ffffff;
            font-size: 0.32rem;
            background-color: #45c763;
            border-radius: 20px;
        }
    }
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1rem;
        font-size: 0.32rem;
        span {
            display: flex;
            align-items: center;
            font-size: 1rem;
        }
    }
    .goods_live {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        width: 100%;
        .goods_live_item {
            position: relative;
            width: 3.55rem;
            height: 5.2rem;
            margin: 0.1rem;
            font-size: 0.24rem;
            background-color: #ffffff;
            border-radius: 10px;
            // border: 1px solid red;
            .img {
                display: flex;
                justify-content: center;
                width: 100%;
                height: 52%;
                margin-top: 0.3rem;
                img {
                    width: 80%;
                    height: 100%;
                }
            }
            .goods_title {
                margin: 0.3rem 0.2rem;
            }
            .goods_price {
                box-sizing: border-box;
                padding: 0 0.2rem;
                display: flex;
                justify-content: space-between;
                // align-items: center;
                position: absolute;
                bottom: 0px;
                width: 100%;
                height: 0.8rem;
                // border: 1px solid red;
                .price {
                    color: red;
                    font-weight: bold;
                }
            }
        }
    }
    .dialog {
        display: flex;
        flex-direction: column;
        align-items: center;
        // width: 100%;
        height: 3.9rem;
        .cencel {
            right: 0.32rem;
            top: 0.32rem;
            font-size: 0.38rem;
            position: absolute;
        }
        .input {
            width: 66vw;
            height: 0.8rem;
            border-bottom: 1px solid #efefef;
        }
        .price {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            font-size: 0.42rem;
        }
        .mode {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                display: flex;
                align-items: center;
                .van-icon {
                    margin-left: 0.1rem;
                }
            }
            .balance {
                color: #a5a6a7;
            }
        }
        .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            width: 2.6rem;
            height: 0.8rem;
            background-color: #07c062;
            border-radius: 8px;
            margin: 0.26rem auto;
        }
    }
    .goods_tools {
        display: flex;
        justify-content: space-between;
        position: fixed;
        bottom: 1.1rem;
        left: 0;
        width: 100%;
        height: 0.8rem;
        background-color: #ffffff;
        font-size: 0.32rem;
        border: 1px solid #ededed;
        .van-checkbox {
            justify-content: center;
            align-items: center;
            width: 15%;
        }
        .price {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 60%;
            .goods_btn,
            .van-button__text {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 0.6rem;
                border-radius: 20px;
            }
        }
    }
}
</style>