<template>
    <div class="mine">这是我的页面
        <router-link :to="{name:'Detail',params:{id:123}}"><button class="go-detail">查看详情</button></router-link>
        
        <router-view></router-view>
    </div>
    
    
</template>

<script>
export default {

}
</script>

<style>

</style>