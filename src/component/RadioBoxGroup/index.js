import React, { Component } from 'react'
import withDataGroup from '../HOC/withDataGroup'
/**
 * 一组单选框
 */
class Radio extends Component{
  handleChange = e => {
    this.props.onChange && this.props.onChange(e.target.value);
  }
  render(){
    return (
      <label key={this.props.info.value}>
        <input
          type="radio"
          name={this.props.name}
          value={this.props.info.value} //当前选中
          checked={this.props.value === this.props.info.value} //单选框选中
          onChange={this.handleChange}
        />
        {this.props.info.text}
      </label>
    )
  }
}
export default withDataGroup(Radio);