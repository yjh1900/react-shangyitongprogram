import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Far from './components/Far'

export default class App extends Component {
  state = { money: '100万' }

  render() {
    PubSub.subscribe('money', (topic, data) => {
      console.log(topic, data)
    })
    return (
      <div>
        App
        <Far></Far>
      </div>
    )
  }
}
