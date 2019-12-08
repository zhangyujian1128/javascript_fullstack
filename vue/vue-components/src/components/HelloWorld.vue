<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i-button size ="small" @on-click="onclick"><i slot="icon">*</i>按钮</i-button>
    <i-button size ="large" @on-click="haclick">提交</i-button>
    <!-- <div @click="oSure"> -->
    <i-button size ="default" ref="sure" @mess ="getmess" @click.native="oSure">确认</i-button>
    <!-- </div> -->
    <div>{{mess}}</div>
  </div>
</template>

<script>
import button from './button'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mess: ''
    }
    
  },
  methods:{
      getmess(e){
        this.mess= e
      },
      onclick(){
        console.log('aaaa');
      },
      haclick(){
        console.log('你好');
      },
      oSure(){
         this.mess = this.$refs.sure.message
        console.log(this.mess)
      }
  },
  components:{
    'i-button':button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
