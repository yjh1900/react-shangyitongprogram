import React, { Component } from 'react'

export default class Login extends Component {
  // state = {
  //   username: '',
  //   password: '',
  // }
  // handle = (name) => (e) => {
  //   this.setState({
  //     [name]: e.target.value.trim(),
  //   })
  // }
  render() {
    const { username, password, handle } = this.props
    console.log(this.props)
    return (
      <form>
        用户名:
        <input type="text" value={username} onChange={handle('username')} />
        <br />
        密码:
        <input
          type="password"
          value={password}
          onChange={handle('password')}
          autoComplete="true"
        />
        <br />
        <button>登录</button>
      </form>
    )
  }
}
