import {request} from './request.js'

export function getDetail(id) {
    return request({
         url:'nottoken/searchGood',
         params:{
            id
         }
    });
}