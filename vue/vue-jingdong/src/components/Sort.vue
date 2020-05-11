<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 80%;">
      <el-tab-pane label="推荐分类">
        <v-recommend></v-recommend>
      </el-tab-pane>
      <el-tab-pane label="京东超市">京东超市</el-tab-pane>
      <el-tab-pane label="国际名牌">国际名牌</el-tab-pane>
      <el-tab-pane label="奢侈品">奢侈品</el-tab-pane>
      <el-tab-pane label="京东国际">京东国际</el-tab-pane>
      <el-tab-pane label="唯品会">唯品会</el-tab-pane>
      <el-tab-pane label="男装">男装</el-tab-pane>
      <el-tab-pane label="女装">女装</el-tab-pane>
      <el-tab-pane label="男鞋">男鞋</el-tab-pane>
      <el-tab-pane label="女鞋">女鞋</el-tab-pane>
      <el-tab-pane label="内衣配饰">内衣配饰</el-tab-pane>
      <el-tab-pane label="箱包手袋">箱包手袋</el-tab-pane>
      <el-tab-pane label="美妆护肤">美妆护肤</el-tab-pane>
      <el-tab-pane label="个护清洁">个护清洁</el-tab-pane>
      <el-tab-pane label="手机数码">手机数码</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Recommend from '@/components/Recommend.vue'
  export default {
    data() {
      return {
        tabPosition: 'left'
      };
    },
    components:{
      'v-recommend': Recommend
    }
  };
</script>

<style>

</style>