<template>
  <div id="app">
    <div>{{msg}}</div>
    <div>
      ------------------------------------------------------------------------------------------------------------------------------------
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in movies" :key="index">{{item}}</li>
      </ul>
    </div>
    <div>
      -------------------------------------------------------------------------------------------------------------------------------------
    </div>
    <div>
        <p>当前计数：{{mount}}</p>
        <button v-on:click="add">+</button>
        <button @click="reduce">-</button>
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
      mount: 0
    }
  },
  methods:{
    add(){
      this.mount++
    },
    reduce(){
      this.mount--
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
</style>
