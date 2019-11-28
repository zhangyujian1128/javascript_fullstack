import * as types from '../types'
const state = {
    showSidebar: false,
    searchHistory: ['123','dada']
}
//方法 必须同步方法
const mutations = {
    [types.COM_SHOW_SIDE_BAR] (state,status){
        state.showSidebar = status
    },
    [types.COM_SAVE_SEARCH_HISTORT](state,status){
        state.searchHistory = status
    },
    [types.COM_DELETE_SEARCH_HISTORY](state,index){
        state.searchHistory.splice(index,1)
    },
    [types.COM_CLEAR_SEARCH_HISTORY](state){
        state.searchHistory =[]
    }
}
// 将mutations里的方法通过actions转化成异步方法，再放到外面调用
const actions = {
    setShowSidebar({commit}, status){
        commit(types.COM_SHOW_SIDE_BAR, status)
    },
    saveSearchHistory({commit,state}, query){
        let searchHistory = [query, ...state.searchHistory.splice()]
        searchHistory = [...new Set(searchHistory)]
        commit(types.COM_SAVE_SEARCH_HISTORT, searchHistory)
    },
    deleteSearchHistory({commit}, index){
        commit(types.COM_DELETE_SEARCH_HISTORY,index)
    },
    clearSearchHistory({commit}, status){
        commit(types.COM_CLEAR_SEARCH_HISTORY,status)
    }
}
//计算属性
const getters = {
    showSidebar: state =>state.showSidebar,
    searchHistory: state =>state.searchHistory
}

export default {
    state,
    getters,
    mutations,
    actions
}