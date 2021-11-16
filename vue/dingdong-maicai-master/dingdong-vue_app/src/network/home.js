import {request} from './request'  // 引入网络请求模块

// 获取轮播图数据
export function getHomeSwiper(){
    return request({
        url:'nottoken/getSwipers'
    });
}

// 获取分类导航数据
export function getHomeNav(){
    return request({
        url:'nottoken/getOneClass'
    })
}

// 疯狂抢购
export function getHomeInsane(){
    return request({
        url:'nottoken/getInsane'
    });
}

// 猜你喜欢
export function getHomeLive(query){
    return request({
        url:'nottoken/homeLive',
        params:query
    });
}