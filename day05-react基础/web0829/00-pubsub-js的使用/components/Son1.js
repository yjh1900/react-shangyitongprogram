import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Son1 extends Component {
  render() {
    const id = PubSub.subscribe('money', (topic, data) => {
      console.log('son1接收到的', topic, data)
    })
    PubSub.subscribe('hj', (topic, data) => {
      console.log('son1接收到的', topic, data)
    })
    return (
      <div>
        Son1,
        <button
          onClick={() => {
            PubSub.unsubscribe(id)
          }}
        >
          清除Son1订阅的money话题
        </button>
        <button
          onClick={() => {
            PubSub.unsubscribe('money')
          }}
        >
          清除money话题
        </button>
        <button
          onClick={() => {
            PubSub.clearAllSubscriptions()
          }}
        >
          清除所有话题
        </button>
      </div>
    )
  }
}
