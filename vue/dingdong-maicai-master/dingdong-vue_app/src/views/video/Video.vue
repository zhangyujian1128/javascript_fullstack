<template>
    <div class="video">
        <video controls loop autoplay>
            <source src="../../assets/01.mp4"  type="video/mp4">
        </video>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style lang="less" scoped>
    .video{
        width: 100vw;
        height: calc(100vh - 60px);
        video{
            width: 100%;
            height: 100%;
        }
    }
</style>