<template>
  <div>
    <img class="logo" src="../assets/logo.jpg" alt />
    <div class="header">
      <div class="input">
        <img class="front" src="../assets/search.png" alt />
        <input class="search" type="text" placeholder="TOPSPORTS耐克满300减60" />
        <img class="behind" src="../assets/camera.png" alt />
      </div>

      <div class="scan">扫一扫</div>
      <div class="news">消息</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo {
  width: 100%;
  height: 140px;
}
.header{
    float: left;
}
.input {
  position: relative;
  width: 75%;
}
.search {
  width: 55%;
  height: 32px;
  font-size: 14px;
  border: 1px solid rgb(206, 206, 206);
  border-radius: 20px;
  padding-left: 40px;
  margin-left: 10px;
  padding-right: 40px;
}
.front {
  position: absolute;
  width: 25px;
  height: 25px;
  left: 5%;
  top: 15%;
}
.behind {
  position: absolute;
  width: 25px;
  height: 25px;
  right: 23%;
  top: 15%;
}
.scan{
    font-size: 8px;
}
.news{
    font-size: 8px;
}
</style>