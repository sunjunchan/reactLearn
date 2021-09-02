import React, { Component } from 'react'
import PropTypes from "prop-types";
export default class ValidationComp extends Component {
  //先混合属性
  static defaultProps = {
    b: false
  }
  //在调用相应的函数进行验证
  static propTypes = {
    a: PropTypes.number.isRequired, //a属性必须使一个数字类型,必填
    b: PropTypes.bool.isRequired,//布尔，必填
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
