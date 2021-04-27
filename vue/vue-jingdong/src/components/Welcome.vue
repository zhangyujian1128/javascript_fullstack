<template>
    <div class="welcomepage" v-if="clickstart">
      <img src="../assets/welcome.jpg"/>
      <div class="welcome">
        <p class="welcometitle">欢迎使用京东</p>
        <p>正品低价、极速配送</p>
        <p>点缀您的品质生活</p>
        <router-link to="/Home">
          <button class="start" @click="start">开始</button>
        </router-link>
        
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      //数据
      clickstart: true
    };
  },
  methods: {
    start() {
      this.clickstart = false;
      this.$emit('miss',this.clickstart)
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
img {
  width: 100%;
  height: 100%;
}
.welcome {
  text-align: center;
}
.welcometitle {
  padding-bottom: 20px;
  letter-spacing: 2px;
  font-size: 30px;
  font-weight: 500;
}
.start {
  margin-top: 50px;
  width: 300px;
  height: 40px;
  background: rgb(255, 35, 35);
  border: 0px solid white;
  border-radius: 20px;
  color: white;
  font-size: 16px;
}
</style>