import {request} from './request.js'

export function getToken(phone){
    return request({
        url:'nottoken/login',
        method:'post',
        data:{
            phone
        }
    });
}