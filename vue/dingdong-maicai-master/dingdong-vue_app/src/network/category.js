import {request} from '../network/request.js'

export function getAllClass(){
    return request({
        url:'nottoken/getAllClass'
    });
}

// 根据id获取商品
export function getOneAllGoods(id) {
    return request({
        url:'nottoken/getOneAllGoods',
        params:{
            id
        }
    });
}