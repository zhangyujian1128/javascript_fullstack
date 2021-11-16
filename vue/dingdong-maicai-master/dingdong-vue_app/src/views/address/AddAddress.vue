<template>
    <div class="add_address">
        <tab-cart title="收货地址"></tab-cart>
        <div v-if="$store.state.addressArr.length==0" class="empty_address">您还没有添加任何收货地址！</div>
        <div class="address_item" v-for="(item,index) in $store.state.addressArr" :key="index">
            <div>
                <div class="info">
                    <div class="name">{{ item.name }}</div>
                    <div class="tel">{{ item.tel }}</div>
                </div>
                <div class="address">{{ item.address }}{{ item.addressDetail }}</div>
            </div>
            <van-icon name="records" />
        </div>
        <div class="add_address_btn">
            <van-button class="btn" type="danger" @click="addAddressBtn()">新增收货地址</van-button>
        </div>
    </div>
</template>
<script>
import TabCart from '../../components/content/TabCart.vue'
import {getAddressAll} from '../../network/address.js'
export default {
    data(){
        return{
            addressArr:[],  // 收货地址数组
        }
    },
    created(){
        getAddressAll().then(res=> {
            console.log(res)
        });
        this.addressArr = this.$store.state.addressArr;
        console.log(this.addressArr)
    },
    methods:{
        addAddressBtn(){
            this.$router.push({
                path:'/editAddress',
                query:{
                    title:'添加收货地址'
                }
            });
        }
    },
    components:{
        TabCart
    }
}
</script>
<style lang="less" scoped>
    .add_address{
        width: 100%;
        height: calc(100vh - 60px);
        position: relative;
        font-size: 0.32rem;
        .address_item{
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0.1rem auto;
            .info{
                display: flex;
            }
            .address{
                font-size: 0.28rem;
            }
        }
        .empty_address{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 1.5rem;
            
        }
        .add_address_btn{
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 0;
            width: 100%;
            bottom: -1rem;
            height: 1rem;
            border-radius: 20px;
            .btn{
                width: 70%;
                border-radius: 20px;
            }
        }
    }
</style>