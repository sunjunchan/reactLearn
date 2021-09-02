import React, { Component } from 'react'
/**
 * 一组单选框
 */
export default class CheckBoxGroup extends Component {
  constructor(props){
    super(props)
  }
  handleChange = e => {
    this.props.onChange && this.props.onChange(e.target.value,this.props.name,e);
  }
  /**
   * 得到一组单选框
   */
  getRadio(){
    return this.props.datas.map(it=>
      (<label key={it.value}>
        <input 
          type="radio" 
          name={this.props.name}
          value={it.value}
          checked={this.props.value === it.value}
          onChange={this.handleChange}
        />
        {it.text}
      </label>)
    )
  }
  render() {
    const bs = this.getRadio()
    return (
      <div>
        {bs}
      </div>
    )
  }
}
