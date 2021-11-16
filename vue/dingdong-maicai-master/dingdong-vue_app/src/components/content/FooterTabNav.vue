<template>
        <van-tabbar v-model="active" :border="true" route active-color="#48C568">
            <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
            <van-tabbar-item to="/index/cart" icon="shopping-cart-o" :badge="$store.state.cartList.length==0?'':$store.state.cartList.length">购物车</van-tabbar-item>
            <van-tabbar-item :to="$store.state.profile"  icon="manager-o" @click="goProfile()">我的</van-tabbar-item>
        </van-tabbar>
</template>
<script>
export default {
    name:'FooterTabNav',
    data() {
        return{
            active:'/home',
        }
    },
    created(){
        
    },
    methods:{
        goProfile(){
            if(sessionStorage.getItem("token")){
                this.$router.push({
                    path:'/profile'
                });
            }else{
                this.$dialog.confirm({
                    title:'友情提示:',
                    message:'经检测，您还没有登录，现在去登录~',
                }).then(()=>{
                    // 当用户按下确认键的时候
                    this.$router.push({
                        path:'/login'
                    });
                }).catch(()=>{
                    // this.$router.go(-1);
                    console.log(sessionStorage.getItem('token'))
                    // 取消登录
                });
            }
        }
    }
}
</script>
<style lang="less" scoped>
.van-tabbar{
    height: 60px;
}
</style>