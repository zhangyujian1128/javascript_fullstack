import React, { Component } from 'react'

//高阶组件--链式调用
const withName = Comp =>{
    class NewComponent extends Component{
        componentDidMount(){
            console.log('do something')
        }
        render(){
            return(
                <Comp {...this.props} name="高阶组件使用"></Comp>
            )
        }
    }

    return NewComponent;
}

const withLog = Comp =>{
    console.log(Comp.name + '渲染了')
    return props => <Comp {...props}></Comp>
}
@withLog
@withName
@withLog
class Jpsite extends Component{
    render(){
        return(
            <div>
                {this.props.state} - {this.props.name}
            </div>
        )
    }
}
// export default withName(withLog(App))    链式调用
export default Jpsite