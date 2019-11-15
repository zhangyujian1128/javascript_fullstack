<template>
    <div>
        <h2>子组件</h2>
    <strong class="red">{{cjieshou}}</strong>
    <button @click="send">向父组件传数据</button>
    </div>
</template>

<script>
export default {
    props:[
        'cjieshou'
    ],
    data(){
        return{
            cmsg:'这是子组件的信息'
        }
    },
    methods:{
        send(){
            this.$emit('xiaoxi',this.cmsg)
        }
    }
}
</script>

<style>
.red{
    background-color: red;
}
</style>