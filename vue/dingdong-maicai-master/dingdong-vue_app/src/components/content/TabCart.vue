<template>
    <div class="tab_cart">
        <van-icon name="arrow-left" class="flex" @click="goBark()" />
        <!-- 
            插槽样式的代码在子组件里不生效，但是写在父组件的样式里就能生效** 
            slot 里面的东西是属于父组件的，样式要写在父组件中    
        -->
        <div class="center flex">{{ title }}</div>
        <div class="flex">  <!--子组件中对 slot 标签设置样式无效，所以套一层div-->
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:function(){
                return ''
            }
        }
    },
    data(){
        return{}
    },
    methods:{
        goBark(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
    .tab_cart{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.3rem;
        background-color: #F8F8F8;
        height: 1rem;
        font-size: 0.32rem;
        .flex{
            flex: 1;
        }
        .center{
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
        }
    }
</style>