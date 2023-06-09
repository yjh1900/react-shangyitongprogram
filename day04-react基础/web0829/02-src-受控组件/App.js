import React, { Component } from 'react'

export default class App extends Component {
  state = {
    psw: '',
    city: 'bj',
    sex: '',
  }

  handle = (name) => (e) => {
    this.setState({
      [name]: e.target.value.trim(),
    })
  }

  // handle = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value.trim(),
  //   })
  // }

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.psw}
          onChange={this.handle('psw')}
          // onChange={this.handle}
          name="psw"
        />
        <select
          name=""
          id=""
          value={this.state.city}
          onChange={this.handle('city')}
        >
          <option value="sz">深圳</option>
          <option value="gz">广州</option>
          <option value="bj">北京</option>
        </select>
        <br />
        {/* 收集单选的数据 */}
        男:
        <input
          type="radio"
          value="male"
          name="sex"
          // 选中这个单选的时候,change事件会触发
          onChange={this.handle('sex')}
        />
        女:
        <input
          type="radio"
          value="female"
          name="sex" // 选中这个单选的时候,change事件会触发
          onChange={this.handle('sex')}
        />
      </div>
    )
  }
}
