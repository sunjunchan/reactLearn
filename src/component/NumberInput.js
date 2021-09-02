// 只能输入数字
import React, { Component } from 'react'

export default class NumberInput extends Component {
  state = {
    val: ""
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.val}
        onChange={e=>{
          var val = e.target.value;
          val = val.replace(/\D/g,"");
          this.setState({
            val
          })
        }}
        />
      </div>
    )
  }
}
