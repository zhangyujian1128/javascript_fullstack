<template>
  <div class="header">
    <div class="header-icon" @click="leftEvent">
        <slot name="left-icon"></slot>
    </div>
    <div class="header-cont">
        <slot name="content"></slot>
    </div>
    <div class="header-icon">
        <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'hd',
    data(){
        return{

        }
    },
    methods:{
        ...mapActions([
            'setShowSidebar'
        ]),
        leftEvent(){
            //dispatch直接调用store里的actions方法
            // this.$store.dispatch('setShowSidebar',true)
            this.setShowSidebar(true);
        }
    }
}
</script>

<style lang="stylus">
@import "../assets/css/function"
.header
    height px2rem(88px)
    line-height px2rem(88px)
    text-align center
    display flex
    align-items center
    justify-content space-between
    color #746ca8
    font-size px2rem(30px)
    &-icon
        flex 0 0 px2rem(88px)
        margin-top px2rem(6px)
        cursor pointer
        .icon
            font-size px2rem(48px)
    &-cont
        flex 1
        text-align center
        font-size 18px
        color #fff
        font-weight 500
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
</style>