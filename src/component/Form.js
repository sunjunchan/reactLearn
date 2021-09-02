import React, { Component } from 'react'
import NumberInput from './NumberInput'
export default class Form extends Component {
  state = {
    val: "123",
    checked: true,
    loves:["a","b","c"],
    chooseLoves:["a"],
    selVal:"a"
  }
  render() {
    var checkboxes = this.state.loves.map(it => (
      <label key={it}>
        <input 
          type="checkbox" 
          checked={this.state.chooseLoves.includes(it)}
          onChange={e=>{
            if(e.target.checked){
              this.setState({
                chooseLoves:[...this.state.chooseLoves,it]
              })
            }else{
              this.setState({
                chooseLoves: this.state.chooseLoves.filter(l => l !== it)
              })
            }
          }}
        />{it}
      </label>))
    return (
      <div>
        <NumberInput/>
        {/* 默认情况下，它是一个非受控组件 */}
        <div>
          {this.state.val}
        </div>
        <input type="text" value={this.state.val} onChange={e=>{
          this.setState({
            val: e.target.value
          })
        }}/>
        <div>
          <input type="checkbox" checked={this.state.checked} onChange={e=>{
            this.setState({
              checked: e.target.checked
            })
          }}/>
        </div>
        <div>
          <div>{this.state.chooseLoves}</div>
          {checkboxes}
        </div>
        <div>
          <select value={this.state.selVal} onChange={e=>{
            this.setState({
              selVal:e.target.value
            })
          }}>
            <option value="a">a</option>
            <option value="b">b</option>
          </select>
        </div>
      </div>
    )
  }
}
