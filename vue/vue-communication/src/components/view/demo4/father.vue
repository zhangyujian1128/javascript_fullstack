<template>
  <div class="container">
      <h2>父组件</h2>
      <div>{{xinxiaoxi}}</div>
    <v-child v-bind:cjieshou="fmsg" v-on:xiaoxi="fjieshou"></v-child>
  </div>
 
</template>

<script>
import child from './child'
export default {
    components: {
        'v-child':child
    },
    data(){
        return{
            fmsg:'这是父组件的信息',
            xinxiaoxi:''
        }
    },
    methods:{
        fjieshou(e){
            this.xinxiaoxi = e;
        }
    }
}
</script>

<style>

</style>