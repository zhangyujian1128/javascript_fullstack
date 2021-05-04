<template>
  <div id="app">
    <!-- <div :class="{'blue': isblue, 'yellow': isyellow}" >{{msg}}</div> -->
    <div :class="getclasses">{{msg}}</div>
    <button @click="btnColor">点击变色</button>
    <div>
      --------------------------------------------------------
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in movies" :key="index">{{item}}</li>
      </ul>
    </div>
    <div>
      --------------------------------------------------------
    </div>
    <div>
        <p>当前计数：{{mount}}</p>
        <button v-on:click="add">+</button>
        <button @click="reduce()">-</button>
    </div>
    <div>
      --------------------------------------------------------
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      msg: 'hello',
      movies: ['杀敌','阿瓦达','阿瓦蒂','和覅','福娃'],
      mount: 0,
      isblue: true,
      isyellow: false
    }
  },
  methods:{
    add(){
      this.mount++
    },
    reduce(){
      this.mount--
    },
    btnColor(){
      this.isblue = !this.isblue
      this.isyellow = !this.isyellow
    },
    
  },
  computed:{//计算属性
    getclasses(){
      return {'blue': this.isblue, 'yellow': this.isyellow}
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.blue{
  color: blue;
}
.yellow{
  color: yellow;
}
</style>




