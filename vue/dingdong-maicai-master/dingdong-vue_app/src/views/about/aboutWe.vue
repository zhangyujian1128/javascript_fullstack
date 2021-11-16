<template>
    <div class="about">
        <tab-cart class="tab_cart" title="关于">
            <div slot="right"></div>
        </tab-cart>
        <div class="content">
            <p>本站仅为业余时间练习前后端联调作品，不参与任何商业活动，如涉及侵权信息，请联系664431710(微信qq同)下架;</p>
            <p>本站开放源码、以及后端接口代码和接口文档，如有需要接口文档，请联系作者664431710(qq微信同);
            </p>
            <p>csdn地址：<a href="https://blog.csdn.net/qq_43353619">https://blog.csdn.net/sirfuao</a></p>
            <p>github地址：<a href="https://github.com/sirfuao">https://github.com/sirfuao</a></p>
        </div>
    </div>
</template>
<script>
import TabCart from '../../components/content/TabCart.vue'
export default {
    data(){
        return{}
    },
    components:{
        TabCart
    }
}
</script>
<style lang="less" scoped>
    .about{
        .content{
            font-size: 0.26rem;
            line-height: 0.5rem;
            padding: 0.3rem;
            p{
                text-indent: 2em;
                a{
                    font-weight: bold;
                }
                a:hover{
                    cursor: pointer;
                }
            }
        }
    }
</style>