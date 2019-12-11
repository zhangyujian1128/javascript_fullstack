<template>
  <div class="parent"> 
      <child1></child1>
      parent
      <child2></child2>
  </div>
</template>

<script>
import child1 from './child1'
import child2 from './child2'
export default {
    components:{
        child1,
        child2
    },
    mounted(){
        this.$on('test',(text)=>{
            console.log(text)
        })
    }
}
</script>

<style>

</style>