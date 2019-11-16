<template>
  <div class="count">
      {{count}}
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
      {{getCount}}
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
    data(){
        return{
            // myCount: null
        }
    },
    // computed:{
    //    myCount(){
    //        return this.$store.state.count
    //    }
    // },

    // computed: mapState(['count'])

    computed: {
       ...mapState(['count']),
       ...mapGetters(['getCount'])
    },
    // computed: mapState({
    //     // count: state =>state.count
    //     myCount (state){
    //         return state.count
    //     }
    // }),
    methods:{
        ...mapMutations([
            'add',
            'reduce'
        ]),
        ...mapActions([
            'addAction',
            'reduceAction'
        ])
        // test(){
        //     this.myCount++
        //     //  this.$store.state.count= this.myCount
        // }
    }
}
</script>

<style>

</style>