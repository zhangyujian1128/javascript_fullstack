<template>
  <div class="contanier">
      <!-- <div>
          <ul class="red">
              <li v-for="item in myObj" :key="item.id">{{item.name}}</li>
          </ul>
      </div> -->
    <child :sendMsg="myMsg" :send-num="myNum" :send-obj="myObj"></child>
  </div>
</template>

<script>
import child from './child'
export default {
    data(){
        return{
            myMsg:'我是父子间的信息',
            myNum:123,
            myObj:[
                {
                    id:1,
                    name:'张三'
                },
                {
                    id:2,
                    name:'李四'
                }
            ]
        }
    },
    components:{
        child
    }
}
</script>

<style>

</style>