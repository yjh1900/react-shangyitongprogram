import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Son from './Son'
import Son1 from './Son1'

export default class Far extends Component {
  render() {
    return (
      <div>
        Far
        <button
          onClick={() => {
            PubSub.publish('hj', '证实了,海静确实是lsp')
          }}
        >
          发布海静是lsp的消息
        </button>
        <hr />
        <Son></Son>
        <Son1></Son1>
      </div>
    )
  }
}
