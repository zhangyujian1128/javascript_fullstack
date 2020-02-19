//PureComponent 组件，其实就是定制化后的 shouldComponentUpdate 的加强版
import React, { Component, PureComponent } from 'react'
//shouldComponentUpdate的加强
class PureComponentTest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: [
                { body: 'react is very good', author: 'facebook' },
                { body: 'vue is very good', author: 'youyuxi' }
            ]
        }

        setTimeout(() => {
            this.setState({
                comments: [
                    { body: 'react is very good', author: 'facebook' },
                    { body: 'vue is very good', author: 'youyuxi' }
                ]
            })

        },2000)
    }
    
    render() {
        return (
            <div>
                {this.state.comments.map((c,i) =>(
                    <Comment key={i} data={c}></Comment>
                ))}
            </div>
        )
    }
}

class Comment extends PureComponent{
    constructor(props){
        super(props)
    }
    // shouldComponentUpdate(nextProp) {
    //     console.log(nextProp)
    //     if (nextProp.data.body === this.props.data.body && nextProp.data.author === this.props.data.author) {
    //         console.log(false)
    //         return false
    //     }
    //     console.log(true)
    //     return true

    // }
    render(){
        console.log('render')
        return(
            <div>
                <p>{this.props.data.body}</p>
                <p>--{this.props.data.author}</p>
            </div>
        )
    }
}
export default PureComponentTest