<template>
    <div class="my_card_add" @click="addAddress">
        <slot name="left"></slot>
        <slot name="right"></slot>
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
        addAddress(){
            this.$emit('event','123');
        }
    }
}
</script>
<style lang="less" scoped>
</style>