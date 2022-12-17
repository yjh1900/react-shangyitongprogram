import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'
console.log('home组件加载了')
export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <Link to="/home/news">News</Link>
            </li>
            <li>
              <Link to="/home/message">Message</Link>
            </li>
          </ul>
          <div>
            <div>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
