import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    cartList:[],    // 购物车列表
    addressArr:[],   // 收货地址
    profile:'',     // 我的图标是否高亮
}

export default new Vuex.Store({
  state,
  mutations: {
      add(state,goodsItem){
        // console.log(this.goodsItem,'a')
        // console.log(this.$store.state.cartList,'b')
        // this.$toast({
        //     message:'添加成功！',
        //     icon:'success',
        //     duration:1000
        // });
        // console.log(this.goodsItem.id);
        let index = state.cartList.findIndex(item => {       // 有就返回找到的那个元素对象 没有返回 undefined 
            return item.id == goodsItem.id;                        // findIndex 有返回索引位置  没有返回 -1
        });
        console.log(index);
        if(index==-1){
            // 当购物车数组中不存在时
            Vue.set(goodsItem,'num',1);
            Vue.set(goodsItem,'isCheck',false);
            state.cartList.push(goodsItem);
            console.log("试试")
        }else{
            // 当购物车数组中已经存在时
            state.cartList[index].num ++;
            console.log("aaa");
        }
        console.log(state.cartList);
      }
  },
  getters: {
    // cartShopLeg: state=> {  // 计算商品数量总和
    //     let num = '';
    //     if(state.cartList.length=0){
    //         return num
    //     }else{
    //         state.cartList.forEach(item=> {
    //             num += item.num
    //         });
    //         return num
    //     }
    // }
  },
  actions: {
  },
  modules: {
  }
})
