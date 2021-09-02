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
  getOpthons(){
    return this.props.datas.map(it=>
      (<option key={it.value} value={it.value}>
        {it.text}
      </option>)
    )
  }
  render() {
    const bs = this.getOpthons()
    return (
      <select name={this.props.name} value={this.props.value} onChange={this.handleChange}>
        {bs}
      </select>
    )
  }
}
