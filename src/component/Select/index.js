import React, { Component } from 'react'
import withDataGroup from '../HOC/withDataGroup'
/**
 * 一组单选框
 */
class Option extends Component{
  render(){
    return (
      <option value={this.props.info.value}>
        {this.props.info.text}
      </option>
    )
  }
}
const OptGroup = withDataGroup(Option)
class Select extends Component{
  render(){
    return <select name={this.props.name} value={this.props.value}
    onChange={(e)=>{
      this.props.onChange && this.props.onChange(e.target.value)
    }}>
      <OptGroup {...this.props}/>
    </select>
  }
}
export default Select;