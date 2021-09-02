import React, { PureComponent } from 'react'

export default class ErrorBound extends PureComponent {
  state = {
    hasError: false
  }
  //更好
  // static getDerivedStateFromError(error) {
  //   //静态函数里面没有this
  //   console.log("发生错误来",error,"错误对象")
  //   return {
  //     hasError: true
  //   }
  // }

  componentDidCatch(error,info){
    console.log("记录错误信息")
      //修改状态影响效率
    // this.setState({
    //   hasError: true
    // })
  }
  render() {
    if(this.state.hasError){
      return <h1>出现错误来</h1>
    }
    return (this.props.children)
  }
}
