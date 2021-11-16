<template>
    <div class="vip">
        <div class="content">
            <p>加入绿卡会员·预计每年节省806元</p>
            <p>5折开通</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'AddVip'
}
</script>
<style lang="less" scoped>
    .vip{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1.4rem;
    background-color: #F8F4F5;
    .content{
        display: flex;
        width: 95%;
        height: 1rem;
        border-radius: 6px;
        justify-content: space-around;
        align-items: center;
        color: white;
        background-image: linear-gradient(to right, #3ABA60 , #55D26F);
        font-size: 0.3rem;
    }
}
</style>