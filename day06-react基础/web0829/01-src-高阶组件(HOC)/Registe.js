import React, { Component } from 'react'

export default class Registe extends Component {
  render() {
    const { username, password, repassword, handle } = this.props
    return (
      <form>
        用户名:
        <input type="text" value={username} onChange={handle('username')} />
        <br />
        密码:
        <input
          type="password"
          autoComplete="true"
          value={password}
          onChange={handle('password')}
        />
        <br />
        确认密码:
        <input
          type="password"
          autoComplete="true"
          value={repassword}
          onChange={handle('repassword')}
        />
        <br />
        <button>注册</button>
      </form>
    )
  }
}
