import React, { Component } from 'react'

export default class Comp extends Component {
  state = {
    n: 0
  }
  // constructor(props){
  //   super(props)
  //   //同步
  //   // setInterval(()=>{
  //   //   this.setState({n:this.state.n+1})
  //   //   this.setState({ n: this.state.n + 1 })
  //   //   this.setState({ n: this.state.n + 1 })
  //   // },1000)
  // }
  handleClick = () => {
    this.setState({
      n: this.state.n + 1
    },()=>{
      //状态完成改变之后触发,该回调函数运行在render之后
      console.log(this.state.n,'回调');
    })
    console.log(this.state.n)//还没有重新渲染，说明目前状态仍然没有发生改变
    //多次改变状态
    this.setState(cur => {
      //参数prev表示当前的状态
      //该函数的返回结果，会混合（覆盖）掉之前的状态
      //该函数是异步执行
      return {
        n: cur.n + 1
      }
    },()=>{
      //所有状态全部更新完成，并且重新渲染后执行
      console.log("state更新完成")
    })
    this.setState(cur => {
      //参数prev表示当前的状态
      //该函数的返回结果，会混合（覆盖）掉之前的状态
      //该函数是异步执行
      return {
        n: cur.n + 1
      }
    })
  }
  render() {
    return (
      <div>
        {this.state.n}
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
