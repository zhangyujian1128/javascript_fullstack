import {request} from './request.js'

export function getAddressAll() {   
    return request({
        url:'index/searchAddress'
    });
}