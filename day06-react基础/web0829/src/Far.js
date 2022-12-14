// 这个组件.用来封装登录和注册中使用的公共的状态和逻辑
import { Component } from 'react'
export default function withForm(Com) {
  return class Far extends Component {
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
      return <Com {...this.state} handle={this.handle}></Com>
    }
  }
}
