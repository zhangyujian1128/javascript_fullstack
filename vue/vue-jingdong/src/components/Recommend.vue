<template>
  <div>
      <div class="sort-container">
        <div class="sort-header">
          <img class="sort-img" src="../assets/sort/618.png" alt="">
        </div>
        <div class="sort-often">
            <p>常用分类</p>
            <img class="itemphoto" src="../assets/home/supermarket.png" alt="">
            <img class="itemphoto" src="../assets/home/seafood.png" alt="">
            <img class="itemphoto" src="../assets/home/phone.png" alt="">
            <img class="itemphoto" src="../assets/home/health.png" alt="">
            <img class="itemphoto" src="../assets/home/food.png" alt="">
            <img class="itemphoto" src="../assets/home/finance.png" alt="">
            <img class="itemphoto" src="../assets/home/fashion.png" alt="">
            <img class="itemphoto" src="../assets/home/computer.png" alt="">
            <img class="itemphoto" src="../assets/home/company.png" alt="">
            <router-link to="/Book">
                <img class="itemphoto" src="../assets/home/book.png" alt="">
            </router-link>
            <router-view/>
        </div>
        <div class="zhuanchang">

        </div>
        <div class="hot-sort">

        </div>
      </div>
      
      
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sort-container{
    margin: 10px;
    height: 580px;
    overflow-y: scroll;
    white-space: nowrap;
}
.sort-header{
    margin-bottom: 15px;
}
.sort-img{
    border-radius: 15px;
}
.itemphoto{
    display: block;
}
</style>