import React, { Component } from 'react'

export default class ClassDefault extends Component {
  //初始化过程中完成混合
  //已经完成了混合
  static defaultProps = {
    a: 1,
    b: 2
  }
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        a:{this.props.a}
        b:{this.props.b}
      </div>
    )
  }
}
//属性默认值
// ClassDefault.defaultProps = {
//   a: 1,
//   b: 2
// }
