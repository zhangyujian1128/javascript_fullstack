<template>
  <div id="app">
    <!-- 头部 -->
      <v-header :seller="seller"></v-header>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'
export default {
  name: 'App',
  data(){
    return{
      seller:{}
    }
  },
  components:{
    'v-header':header
  },
  created(){
        this.$http.get('http://localhost:8080/static/seller.json',{})
        .then((res)=>{
            console.log(res)
            if(res.data.errno === 0){
              // this.seller =res.data.data
              this.seller = Object.assign({},this.seller,res.data.data)     //合并对象数据 Object.assign方法
            }
        })
    }
}
</script>

<style>

</style>
