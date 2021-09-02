import React, { Component } from 'react'
import CheckBoxGroup from './index'
export default class Test extends Component {
  state = {
    datas:[
      { value: "1", text: "1" },
      { value: "2", text: "2" },
      { value: "3", text: "3" }
    ],
    name: "lovers",
    chooseDatas:["1"]
  }
  render() {
    return (
      <div>
        <CheckBoxGroup 
          name="lovers"
          {...this.state}
          onChange={newArr=>{
            this.setState({
              chooseDatas: newArr
            })
          }}
        />
      </div>
    )
  }
}
