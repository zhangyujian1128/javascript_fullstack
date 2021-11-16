<template>
    <div class="my_center">
        <tab-cart title="个人中心"></tab-cart>
        <div class="content">
            <div class="center_item" @click="toast()">
                <div class="left">
                    <van-icon name="photo-o" color="#AAAAAA" />
                    <div>头像</div>
                </div>
                <div class="right">小目标还没有实现</div>
            </div>
            <div class="center_item" @click="toast()">
                <div class="left">
                    <van-icon name="user-circle-o" color="#AAAAAA" />
                    <div>昵称</div>
                </div>
                <div class="right">叮咚小白</div>
            </div>
            <div class="center_item" @click="toast()">
                <div class="left">
                    <van-icon name="phone-o" color="#AAAAAA" />
                    <div>手机号</div>
                </div>
                <div class="right">{{ tel }}</div>
            </div>
        </div>
        <div class="btn">
            <van-button type="info" class="bark_login" @click="barkLogin()">退出登录</van-button>
        </div>
    </div>
</template>
<script>
import TabCart from '../../components/content/TabCart.vue'
export default {
    data(){
        return{
            tel:''
        }
    },
    created(){
        this.tel = sessionStorage.getItem('tel');
    },
    components:{
        TabCart
    },
    methods:{
        toast(){
            this.$toast("努力开发中...");
        },
        barkLogin(){
            this.$dialog.confirm({
                title:'提示：',
                message:'您确认要退出登陆吗'
            }).then(()=> {
                sessionStorage.removeItem('token');
                this.$store.state.profile = '';
                this.$router.push({
                    path:'/'
                });
                console.log("退出了");
            }).catch(()=>{
                console.log("取消了")
            });
        }
    }
}
</script>
<style lang="less" scoped>
    .my_center{
        width: 100%;
        height: 100vh;
        background-color: #f1f1f1;
        .content{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #ffffff;
            font-size: 0.3rem;
            border-radius: 10px;    
            .center_item{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 90%;
                height: 1rem;
                border-bottom: 1px solid #EEEEEE;
                color: #8799A3;
                .left{
                    display: flex;
                    align-items: center;
                    div{
                        margin-left: 0.2rem;
                    }
                }
                .right{
                    font-size: 0.24rem;
                }
            }
        }
        .btn{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 2rem;
            .bark_login{
                width: 70%;
                border-radius: 10px;
            }
        }
    }
</style>