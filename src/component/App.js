import React, { Component } from 'react'
export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children || "默认值"}
      </div>
    )
  }
}
