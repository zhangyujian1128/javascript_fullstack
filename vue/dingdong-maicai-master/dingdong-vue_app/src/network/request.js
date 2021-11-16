// 引入弹框提示加载中组件
import Vant from 'vant';

// 发起网络请求的js文件模块
import axios from 'axios';

export function request(config) {
    // 1、创建axios实例
    const instance = axios.create({
        baseURL:'如需线上接口 欢迎致电(微信)664431710',   // 接口跟地址
        timeout:5000,  // 设置请求超时时间
    });
    // 2、设置axios的拦截器
    instance.interceptors.request.use(config=>{
        // 配置请求头
        config.headers.Authorization = sessionStorage.getItem('token')?sessionStorage.getItem('token') : '';
        Vant.Toast.loading({
            message: '加载中...',
            forbidClick: true,
            loadingType: 'spinner',
          });
        // 请求成功拦截
        return config
        console.log(config)
    },err =>{
        // 请求失败拦截
        console.log(err);
    });

    // 设置响应拦截
    instance.interceptors.response.use(res=>{
        Vant.Toast.clear();
        // 响应成功拦截
        return res.data // 将响应的数据 返回出去
        console.log(res)
    },err=>{
        Vant.Toast.clear();
        // 响应失败拦截
        console.log(err)
    });
    // 发送真正的网络请求
    return instance(config)  // 这里返回的是一个Promise 对象
}