// 这个组件.用来封装登录和注册中使用的公共的状态和逻辑
import { Component } from 'react'
// 返回的返回值,是定义的组件
// Com 是需要使用公共状态和逻辑的子组件
export default function withForm(Com) {
  return class Far extends Component {
    static displayName = 'With' + Com.name
    state = {
      username: '',
      password: '',
      repassword: '',
    }
    handle = (name) => (e) => {
      this.setState({
        [name]: e.target.value.trim(),
      })
    }
    render() {
      // 使用子组件,通过props将状态和逻辑传递下去
      // 注意: 以后定义高阶组件代码的时候,一定要记得将props传递下去
      return <Com {...this.state} handle={this.handle} {...this.props}></Com>
    }
  }
}
