import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Son extends Component {
  // 发布者
  render() {
    return (
      <div>
        Son
        <button
          onClick={() => {
            PubSub.publish('money', '要5毛钱')
          }}
        >
          点击按钮发布要钱的话题
        </button>
      </div>
    )
  }
}
