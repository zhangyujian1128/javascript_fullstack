<template>
  <div id="app">
    <!-- <div :class="{'blue': isblue, 'yellow': isyellow}" >{{msg}}</div> -->
    <!-- 计算属性getclasses或者方法getclasses()动态绑定一个标签类名 -->
    <div :class="getclasses">{{msg}}</div>  
    <button @click="btnColor">点击变色</button>
    <div>
      --------------------------------------------------------
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in movies" :key="index" >
          <i class="it">{{item}}</i>
        </li>
      </ul>
    </div>
    <div>
      --------------------------------------------------------
    </div>
    <div>
        <p :style="{fontSize : font +'px'}">当前计数：{{mount}}</p>
        <button v-on:click="add">+</button>
        <button @click="reduce()">-</button>
    </div>
    <div>
      --------------------------------------------------------
    </div>

    <div>
      {{firstName}} {{lastName}}
      {{fullName}}
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 存放数据
  data(){
    return{
      msg: 'hello',
      movies: ['杀敌','阿瓦达','阿瓦蒂','和覅','福娃'],
      mount: 10,
      isblue: true,
      isyellow: false,
      font : 50,
      firstName: 'Lebron',
      lastName: 'James'
    }
  },
  //存放方法
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
    }
  },
  //存放计算属性
  computed:{
    getclasses(){
      return {'blue': this.isblue, 'yellow': this.isyellow}
    },
    fullName(){
      return (this.firstName +'  '+ this.lastName)
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
.it:hover{
  color: red;
}
</style>




