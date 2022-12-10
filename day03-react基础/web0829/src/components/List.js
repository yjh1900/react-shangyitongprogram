import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class List extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
  }

  // 默认值
  static defaultProps = {
    list: [{ id: 1, name: '大傻子', info: '要写list属性哦,list是数组哦' }],
  }

  render() {
    return (
      <ul>
        {this.props.list.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.info}</p>
            </li>
          )
        })}
      </ul>
    )
  }
}
// List.propTypes = {}
