import React, { Component } from 'react'
import PropTypes from "prop-types"
const types = {
  a: PropTypes.number,
  // onChange: PropTypes.func
}
function ChildA(props,context){
  return <div>
    <h1>
      a:{context.a}
      <ChildB/>
    </h1>
  </div>
}
ChildA.contextTypes = types
class ChildB extends React.Component{
  /**
   * 声明需要使用哪些上下文中的数据
   */
  static contextTypes = types
  constructor(props,context){
    super(props,context)
    console.log(context)
    console.log(this.context)
  }
  render(){
    return <p>ChildB,来自上下文中的数据{this.context.a}</p>
  }
}
export default class OldContext extends Component {
  state = {
    a: 123,
    b: "233"
  }
  static childContextTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.string.isRequired,
    onChange: PropTypes.func
  }
  /**
   * 得到上下文中的数据
   */
  getChildContext(){
    console.log("获取上下文中的数据")
    return {
      a: this.state.a,
      b: this.state.b,
      onChange: (newA)=>{
        this.setState({
          a: newA
        })
      }
    }
  }
  render() {
    return (
      <div>
        <ChildA/>
      </div>
    )
  }
}
