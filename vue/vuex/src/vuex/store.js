import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state ={
    count: 1
}

const mutations ={
    add(state){
        state.count++
    },
    reduce(state){
        state.count--
    }
}

const actions ={
    addAction(context){
        context.commit('add')
    },
    reduceAction({commit}){
        setTimeout(()=>{
            commit('reduce')
        },3000)
        console.log('我比reduce先执行')
    }
}

const getters ={
    getCount: (state)=>{
        return state.count+100
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})