//计时器，用作倒计时
import React, { Component } from 'react'
//在super之后运行，初始化状态，JS Next语法，目前处于实验阶段
export default class Tick extends Component {
  state = {
    left: this.props.number
  }
  constructor(props){
    super(props);
    //初始化状态
    // this.state = {
    //   left: this.props.number
    // };
    this.timer = setInterval(()=>{
      this.setState({
        left: this.state.left - 1
      });//触发自动的重新渲染
      if(this.state.left === 0){
        clearInterval(this.timer);
        this.props.onOver && this.props.onOver()
      }
    },1000)
  }
  render() {
    return (
      <div>
        倒计时剩余时间：{this.state.left}
      </div>
    )
  }
}
