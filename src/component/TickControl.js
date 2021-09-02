import React, { Component } from 'react'
import Tick from './Tick'
export default class TickControl extends Component {
  state = {
    isOver: false //倒计时是否完成
  }
  // constructor(props){
  //   super(props);
  //   this.onOver = this.onOver.bind(this);
  // }
  // onOver(){
  //   this.setState({
  //     isOver: true
  //   })
  // }
  //结果是onOver不在原型上，在对象上
  onOver = () => {
    this.setState({
      isOver: true
    })
  }
  render() {
    let status = "正在倒计时";
    if(this.state.isOver){
      status = "倒计时完成"
    }
    return (
      <div>
        {/* <Tick onOver={()=>{
          this.setState({
            isOver:true
          })
        }} number={4}/> */}
        {/* <Tick onOver={this.onOver.bind(this)} number={4} /> */}
        <Tick onOver={this.onOver} number={4} />
        <p>
          {status}
        </p>
      </div>
    )
  }
}
