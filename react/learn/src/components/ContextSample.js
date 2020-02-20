//组件跨层级的上下文通信
import React , { Component } from 'react';
 
//1. 创建上下文
const Context = React.createContext()

const store = {
    name: '恭喜你中了一等奖',
    sayHi (){
        console.log(this.name)
    }
}

const withProvider = Comp => props =>(
    <Context.Consumer></Context.Consumer>
)