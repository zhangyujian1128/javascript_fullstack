import { request } from './request.js'

export function getCartLike(paramsObj){
    return request({
        url:'nottoken/getBuyGoods',  // 猜你喜欢
        params:paramsObj
    })
}

export function goDetail(id){
    return request({
        url:'nottoken/getOneAllGoods',  // 商品详情
        params:{
            id
        }
    });
}