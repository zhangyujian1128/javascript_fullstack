//入口
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';//pwa支持

// class App extends React.Component {
//     render() {
//         //props
//         return  <div>
//                     hello {this.props.name}, I am {9+9} years old
//                 </div>
//     }
// }

//state
class Counter extends React.Component {
    constructor (props) {
        super(props)
        // 初始化构造器时设置内部状态num值为1
        this.state = {
            num: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }
    // 生命周期方法，组件渲染完成，只会执行一次
    componentDidMount() {
        console.log('componentDidMount 函数触发')
    }
    //生命周期方法，避免组件重复或者无意义的渲染
    shouldComponentUpdate(nextProps, nextState){
        // console.log(nextProps,nextState)
        if(nextState.num%2) {
            return true
        }
        return false
    }
    handleClick(){
        console.log(123)
        this.setState({
            num: this.state.num + 1
        })
    }
    render (){
        return(
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handleClick}>click</button>
            </div>  
        )
        
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
