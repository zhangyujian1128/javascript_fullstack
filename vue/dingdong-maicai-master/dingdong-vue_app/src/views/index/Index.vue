<template>
    <div class="index">
        <router-view></router-view>
        <footer-tab-nav></footer-tab-nav>
    </div>
</template>
<script>
import FooterTabNav from '../../components/content/FooterTabNav.vue'
export default {
    name:'Index',
    data() {
        return{
            // active:'/home'
        }
    },
    components:{
        FooterTabNav
    }
}
</script>
<style lang="less" scoped>
</style>